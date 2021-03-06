---
id: hardware
title: Hardware
sidebar_label: Hardware
slug: /hardware
---

## Schematic

![Watchy Schematic](../static/img/watchy_schematic_light.svg)
[PDF Download](../static/pdf/watchy_schematic.pdf)

---

## Pin Map

| ESP32-PICO-D4 | GDEH0154D67 |BMA423|DS3231|Battery ADC|   UART   |  Buttons  |
| ------------- | :---------: | :--: |:----:| :-------: |   :-:    |    :-:    |    
| GPIO 1        |             |      |      |           |    TX    |           |
| GPIO 3        |             |      |      |           |    RX    |           |
| GPIO 4        |             |      |      |           |          |  Button 4 |
| GPIO 5        |     CS      |      |      |           |          |           |
| GPIO 9        |     RES     |      |      |           |          |           |
| GPIO 10       |     DC      |      |      |           |          |           |
| GPIO 12       |             | INT2 |      |           |          |           |
| GPIO 13       |             |      |      |           |          |           |
| GPIO 14       |             | INT1 |      |           |          |           |
| GPIO 18       |    SCLK     |      |      |           |          |           |
| GPIO 19       |    BUSY     |      |      |           |          |           |
| GPIO 21       |             | SDA  |  SDA |           |          |           |
| GPIO 22       |             | SCL  |  SCL |           |          |           |
| GPIO 23       |    MOSI     |      |      |           |          |           |
| GPIO 25       |             |      |      |           |          |  Button 2 |
| GPIO 26       |             |      |      |           |          |  Button 1 |
| GPIO 27       |             |      | INT  |           |          |           |
| GPIO 32       |             |      |      |           |          |  Button 3 |
| GPIO 33       |             |      |      |    ADC    |          |           |

---

## Bill of Materials

<iframe src="/interactive_bom/watchy_interactive_bom.html" width="100%" height="600" title="Watchy Interactive BOM" ></iframe>


[Open Interactive BOM in new tab](https://watchy.sqfmi.com/interactive_bom/watchy_interactive_bom.html)

[Download BOM CSV](https://github.com/sqfmi/watchy-hardware/blob/main/WatchyBOM.csv)
> Created Using **[InteractiveHtmlBom](https://github.com/openscopeproject/InteractiveHtmlBom)**

---

## Datasheets

* Microcontroller [ESP32-PICO-D4](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf)
* USB-Serial [CP2104](https://www.silabs.com/documents/public/data-sheets/cp2104.pdf)
* E-Paper Display [GDEH0154D67](https://www.e-paper-display.com/products_detail/productId=455.html)
* Display Connector [AFC07-S24ECC-00](https://datasheet.lcsc.com/szlcsc/1811021340_JUSHUO-AFC07-S24ECC-00_C11092.pdf)
* 3-Axis Accelerometer [BMA423](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bma423-ds004-00.pdf)
* Real Time Clock [DS3231](https://datasheets.maximintegrated.com/en/ds/DS3231.pdf)
* Battery [LiPo Battery 3.7V 200mAh 402030](https://www.powerstream.com/lip/GMB042030.pdf)
* LDO Voltage Regulator [ME6211C33M5G-N](https://datasheet.lcsc.com/szlcsc/Nanjing-Micro-One-Elec-ME6211C33M5G-N_C82942.pdf)
* Battery Connector [BOOMELE 1.25T-2PWT](https://datasheet.lcsc.com/szlcsc/1811092210_BOOMELE-Boom-Precision-Elec-1-25T-2PWT_C22074.pdf)
* Micro USB Connector [U-F-M5DD-Y-L](https://datasheet.lcsc.com/szlcsc/1811131825_Korean-Hroparts-Elec-U-F-M5DD-Y-L_C91146.pdf)
* Tactile Buttons [K2-1114SA-A4SW-06](https://datasheet.lcsc.com/szlcsc/1810061013_Korean-Hroparts-Elec-K2-1114SA-A4SW-06_C136662.pdf)
* Vibration Motor [1020](https://github.com/SeeedDocument/Bazaar_doc/raw/master/316040001/1020_datasheet.doc)
* PCB Antenna [SWRA117D](https://www.ti.com/lit/an/swra117d/swra117d.pdf)

---

## KiCAD Design Files & GERBER

* [GitHub](https://github.com/sqfmi/watchy-hardware)

---

## Dimensions

* Length: 46.0MM
* Width: 35.5MM
* Height: 9.5MM
* Weight: 13g


