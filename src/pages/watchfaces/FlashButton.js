import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './watchface.module.css';

// Merged firmware images are always written to the start of flash.
const FLASH_ADDRESS = 0x0;
// Baud rate used once the ROM loader is up. Ignored on native USB (Watchy V3).
const BAUDRATE = 921600;

// Watchy V3 is an ESP32-S3 with 8MB of flash, exposed over the chip's native
// USB-JTAG serial port. Anything else is refused.
const REQUIRED_CHIP = 'ESP32-S3';
const REQUIRED_FLASH_SIZE = '8MB';
const REQUIRED_USB_VENDOR_ID = 0x303a;
const REQUIRED_USB_PRODUCT_ID = 0x1001;

// Flash size ID (bits 16-23 of the SPI flash JEDEC ID) to human readable size,
// matching esptool's own table.
const FLASH_SIZE_IDS = {
  0x12: '256KB', 0x13: '512KB', 0x14: '1MB', 0x15: '2MB', 0x16: '4MB',
  0x17: '8MB', 0x18: '16MB', 0x19: '32MB', 0x1a: '64MB', 0x1b: '128MB',
  0x1c: '256MB', 0x20: '64MB', 0x21: '128MB', 0x22: '256MB',
  0x32: '256KB', 0x33: '512KB', 0x34: '1MB', 0x35: '2MB', 0x36: '4MB',
  0x37: '8MB', 0x38: '16MB', 0x39: '32MB', 0x3a: '64MB',
};

function isWebSerialSupported() {
  return typeof navigator !== 'undefined' && 'serial' in navigator;
}

function hex(n) {
  return '0x' + n.toString(16).padStart(4, '0');
}

function portInfo(port) {
  return port && typeof port.getInfo === 'function' ? port.getInfo() : {};
}

function describeUsbIds(info) {
  if (!info || info.usbVendorId === undefined) {
    return null;
  }
  return `${hex(info.usbVendorId)}:${hex(info.usbProductId === undefined ? 0 : info.usbProductId)}`;
}

function describePort(port) {
  const ids = describeUsbIds(portInfo(port));
  return ids ? `USB device ${ids}` : 'Serial device';
}

function FlashButton({ name, firmware }) {
  // step: null | 'unsupported' | 'unsupported-device' | 'confirm' | 'flashing'
  //       | 'done' | 'error'
  const [step, setStep] = useState(null);
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState('');
  const [error, setError] = useState('');
  // True once the last byte is sent and esptool is still finishing up, so the
  // progress bar can show activity instead of a frozen-looking 100%.
  const [finalizing, setFinalizing] = useState(false);
  // What the connected board reported, shown when it is not a Watchy V3.
  const [detected, setDetected] = useState(null);
  const portRef = useRef(null);

  // Warn before leaving the page mid-flash.
  useEffect(() => {
    if (step !== 'flashing') {
      return undefined;
    }
    const onBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [step]);

  const appendLog = (text) => setLog((prev) => prev + text);

  const close = () => {
    if (step === 'flashing') {
      return;
    }
    portRef.current = null;
    setStep(null);
    setLog('');
    setError('');
    setProgress(0);
    setFinalizing(false);
    setDetected(null);
  };

  const onFlashClick = async () => {
    if (!isWebSerialSupported()) {
      setStep('unsupported');
      return;
    }
    let port;
    try {
      port = await navigator.serial.requestPort({
        filters: [{ usbVendorId: REQUIRED_USB_VENDOR_ID, usbProductId: REQUIRED_USB_PRODUCT_ID }],
      });
    } catch (e) {
      // User closed the device picker without choosing a port.
      return;
    }

    // The filter above should already exclude anything else, but a port the
    // browser remembers from another site can still come back here.
    const info = portInfo(port);
    if (info.usbVendorId !== REQUIRED_USB_VENDOR_ID || info.usbProductId !== REQUIRED_USB_PRODUCT_ID) {
      setDetected({ usb: describeUsbIds(info), chip: null, flash: null });
      setStep('unsupported-device');
      return;
    }

    portRef.current = port;
    setStep('confirm');
  };

  const startFlash = async () => {
    setStep('flashing');
    setProgress(0);
    setFinalizing(false);
    setDetected(null);
    setLog('');
    setStatus('Connecting to Watchy...');

    let transport = null;
    try {
      // Loaded on demand: esptool-js touches browser-only APIs and the
      // site is pre-rendered on the server.
      const { ESPLoader, Transport } = await import('esptool-js');

      transport = new Transport(portRef.current, false);
      const terminal = {
        clean() {},
        writeLine(data) { appendLog(data + '\n'); },
        write(data) { appendLog(data); },
      };
      const loader = new ESPLoader({ transport, baudrate: BAUDRATE, terminal });

      const chip = await loader.main();
      setStatus('Checking hardware...');

      const chipName = loader.chip && loader.chip.CHIP_NAME ? loader.chip.CHIP_NAME : null;
      let flashSize = null;
      try {
        const flashId = await loader.readFlashId();
        flashSize = FLASH_SIZE_IDS[(flashId >> 16) & 0xff] || null;
      } catch (e) {
        // Leave flashSize null: an unreadable flash chip fails the check below.
      }

      if (chipName !== REQUIRED_CHIP || flashSize !== REQUIRED_FLASH_SIZE) {
        setDetected({
          usb: describeUsbIds(portInfo(portRef.current)),
          chip: chipName || chip || null,
          flash: flashSize,
        });
        setStep('unsupported-device');
        return;
      }

      setStatus(`Connected to ${chip}. Downloading firmware...`);

      const response = await fetch(firmware);
      if (!response.ok) {
        throw new Error(`Could not download firmware (${response.status} ${response.statusText})`);
      }
      const data = new Uint8Array(await response.arrayBuffer());
      if (data.length === 0) {
        throw new Error('Downloaded firmware is empty');
      }

      setStatus(`Writing ${name} (${(data.length / 1024).toFixed(0)} KB)...`);
      await loader.writeFlash({
        fileArray: [{ data, address: FLASH_ADDRESS }],
        flashSize: 'keep',
        flashMode: 'keep',
        flashFreq: 'keep',
        eraseAll: false,
        compress: true,
        reportProgress: (fileIndex, written, total) => {
          setProgress(Math.min(100, Math.round((written / total) * 100)));
          if (written >= total) {
            // The device still has to commit the last blocks and leave flash
            // mode, which takes a few seconds with no further progress events.
            setFinalizing(true);
            setStatus('All data sent. Waiting for Watchy to finish writing flash...');
          }
        },
      });
      setProgress(100);
      // No serial reset here: Watchy has to be reset by hand anyway, so the
      // completion screen asks the user to press the button instead.
      setFinalizing(false);
      setStep('done');
    } catch (e) {
      console.error(e);
      setError(e && e.message ? e.message : String(e));
      setFinalizing(false);
      setStep('error');
    } finally {
      if (transport) {
        try {
          await transport.disconnect();
        } catch (e) {
          // Port may already be gone after the device rebooted.
        }
      }
    }
  };

  const renderBody = () => {
    switch (step) {
      case 'unsupported':
        return (
          <>
            <h3>Browser not supported</h3>
            <p>
              Flashing from the browser uses the Web Serial API, which is only available
              in desktop Chrome, Edge, and Opera. Please open this page in one of those
              browsers to flash <strong>{name}</strong> to your Watchy.
            </p>
            <div className={styles.actions}>
              <button className="button button--secondary" onClick={close}>Close</button>
            </div>
          </>
        );
      case 'unsupported-device':
        return (
          <>
            <h3>This device is not a Watchy V3</h3>
            <p>
              Flashing from this page currently supports <strong>Watchy V3</strong> only,
              which uses an ESP32-S3 with 8&nbsp;MB of flash on USB{' '}
              <code>{hex(REQUIRED_USB_VENDOR_ID)}:{hex(REQUIRED_USB_PRODUCT_ID)}</code>.
            </p>
            <ul className={styles.detected}>
              <li>USB ID: <code>{(detected && detected.usb) || 'unknown'}</code></li>
              <li>Chip: <code>{(detected && detected.chip) || 'not read'}</code></li>
              <li>Flash: <code>{(detected && detected.flash) || 'not read'}</code></li>
            </ul>
            <p>Nothing was written to your device.</p>
            {renderLog()}
            <div className={styles.actions}>
              <button className="button button--secondary" onClick={close}>Close</button>
            </div>
          </>
        );
      case 'confirm':
        return (
          <>
            <h3>Flash {name}?</h3>
            <p>
              This will replace the firmware currently on your Watchy with the{' '}
              <strong>{name}</strong> watch face.
            </p>
            <p>
              Device: <code>{describePort(portRef.current)}</code>
            </p>
            <p>Keep the USB cable connected until flashing has finished.</p>
            <div className={styles.actions}>
              <button className="button button--secondary" onClick={close}>Cancel</button>
              <button className="button button--primary" onClick={startFlash}>Flash</button>
            </div>
          </>
        );
      case 'flashing':
        return (
          <>
            <h3>Flashing {name}</h3>
            <p>{status}</p>
            <div
              className={styles.progress}
              role="progressbar"
              aria-valuenow={finalizing ? undefined : progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className={finalizing ? styles.progressBarBusy : styles.progressBar}
                style={finalizing ? undefined : { width: progress + '%' }}
              />
            </div>
            <p className={styles.progressLabel}>{finalizing ? 'Almost there...' : progress + '%'}</p>
            <p><em>Do not unplug your Watchy or close this tab.</em></p>
            {renderLog()}
          </>
        );
      case 'done':
        return (
          <>
            <h3>Flashing complete</h3>
            <p>
              <strong>{name}</strong> has been written to your Watchy.
            </p>
            <p>
              Please reset your Watchy now by pressing the <strong>reset button</strong> on
              the back of the board. The new watch face will appear after it boots.
            </p>
            {renderLog()}
            <div className={styles.actions}>
              <button className="button button--primary" onClick={close}>Done</button>
            </div>
          </>
        );
      case 'error':
        return (
          <>
            <h3>Flashing failed</h3>
            <p>{error}</p>
            <p>
              Make sure no other program (Arduino IDE, a serial monitor, etc.) is using the
              port, then unplug and reconnect your Watchy and try again.
            </p>
            {renderLog()}
            <div className={styles.actions}>
              <button className="button button--secondary" onClick={close}>Close</button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderLog = () => {
    if (!log) {
      return null;
    }
    return (
      <details className={styles.logDetails}>
        <summary>Log</summary>
        <pre className={styles.log}>{log.replace(/\r/g, '')}</pre>
      </details>
    );
  };

  const modal = step
    ? ReactDOM.createPortal(
        <div className={styles.overlay} onClick={close}>
          <div className={styles.modal} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            {renderBody()}
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <button className={'button button--primary ' + styles.flashButton} onClick={onFlashClick}>
        Flash
      </button>
      {modal}
    </>
  );
}

export default FlashButton;
