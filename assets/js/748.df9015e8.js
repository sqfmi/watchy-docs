"use strict";
exports.id = 748;
exports.ids = [555,748];
exports.modules = {

/***/ 8367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ESP32P4ROM: () => (/* binding */ ESP32P4ROM)
/* harmony export */ });
/* harmony import */ var _esp32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8555);

class ESP32P4ROM extends _esp32_js__WEBPACK_IMPORTED_MODULE_0__.ESP32ROM {
    constructor() {
        super(...arguments);
        this.CHIP_NAME = "ESP32-P4";
        this.IMAGE_CHIP_ID = 18;
        this.IROM_MAP_START = 0x40000000;
        this.IROM_MAP_END = 0x4c000000;
        this.DROM_MAP_START = 0x40000000;
        this.DROM_MAP_END = 0x4c000000;
        this.BOOTLOADER_FLASH_OFFSET = 0x2000; // First 2 sectors are reserved for FE purposes
        this.CHIP_DETECT_MAGIC_VALUE = [0x0, 0x0addbad0];
        this.UART_DATE_REG_ADDR = 0x500ca000 + 0x8c;
        this.EFUSE_BASE = 0x5012d000;
        this.EFUSE_BLOCK1_ADDR = this.EFUSE_BASE + 0x044;
        this.MAC_EFUSE_REG = this.EFUSE_BASE + 0x044;
        this.SPI_REG_BASE = 0x5008d000; // SPIMEM1
        this.SPI_USR_OFFS = 0x18;
        this.SPI_USR1_OFFS = 0x1c;
        this.SPI_USR2_OFFS = 0x20;
        this.SPI_MOSI_DLEN_OFFS = 0x24;
        this.SPI_MISO_DLEN_OFFS = 0x28;
        this.SPI_W0_OFFS = 0x58;
        this.SPI_ADDR_REG_MSB = false;
        this.USES_MAGIC_VALUE = false;
        this.EFUSE_RD_REG_BASE = this.EFUSE_BASE + 0x030; // BLOCK0 read base address
        this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT = 9;
        this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY = 2;
        this.EFUSE_PURPOSE_KEY0_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_PURPOSE_KEY0_SHIFT = 24;
        this.EFUSE_PURPOSE_KEY1_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_PURPOSE_KEY1_SHIFT = 28;
        this.EFUSE_PURPOSE_KEY2_REG = this.EFUSE_BASE + 0x38;
        this.EFUSE_PURPOSE_KEY2_SHIFT = 0;
        this.EFUSE_PURPOSE_KEY3_REG = this.EFUSE_BASE + 0x38;
        this.EFUSE_PURPOSE_KEY3_SHIFT = 4;
        this.EFUSE_PURPOSE_KEY4_REG = this.EFUSE_BASE + 0x38;
        this.EFUSE_PURPOSE_KEY4_SHIFT = 8;
        this.EFUSE_PURPOSE_KEY5_REG = this.EFUSE_BASE + 0x38;
        this.EFUSE_PURPOSE_KEY5_SHIFT = 12;
        this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG = this.EFUSE_RD_REG_BASE;
        this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT = 1 << 20;
        this.EFUSE_SPI_BOOT_CRYPT_CNT_REG = this.EFUSE_BASE + 0x034;
        this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK = 0x7 << 18;
        this.EFUSE_SECURE_BOOT_EN_REG = this.EFUSE_BASE + 0x038;
        this.EFUSE_SECURE_BOOT_EN_MASK = 1 << 20;
        this.PURPOSE_VAL_XTS_AES256_KEY_1 = 2;
        this.PURPOSE_VAL_XTS_AES256_KEY_2 = 3;
        this.PURPOSE_VAL_XTS_AES128_KEY = 4;
        this.SUPPORTS_ENCRYPTED_FLASH = true;
        this.FLASH_ENCRYPTED_WRITE_ALIGN = 16;
        this.USB_RAM_BLOCK = 0x800; // Max block size USB-OTG is used
        this.GPIO_STRAP_REG = 0x500e0038;
        this.GPIO_STRAP_SPI_BOOT_MASK = 0x8; // Not download mode
        this.RTC_CNTL_OPTION1_REG = 0x50110008;
        this.RTC_CNTL_FORCE_DOWNLOAD_BOOT_MASK = 0x4; // Is download mode forced over USB?
        // Flash power-on related registers and bits needed for ECO6
        this.DR_REG_LPAON_BASE = 0x50110000;
        this.DR_REG_PMU_BASE = this.DR_REG_LPAON_BASE + 0x5000;
        this.DR_REG_LP_SYS_BASE = this.DR_REG_LPAON_BASE + 0x0;
        this.LP_SYSTEM_REG_ANA_XPD_PAD_GROUP_REG = this.DR_REG_LP_SYS_BASE + 0x10c;
        this.PMU_EXT_LDO_P0_0P1A_ANA_REG = this.DR_REG_PMU_BASE + 0x1bc;
        this.PMU_ANA_0P1A_EN_CUR_LIM_0 = 1 << 27;
        this.PMU_EXT_LDO_P0_0P1A_REG = this.DR_REG_PMU_BASE + 0x1b8;
        this.PMU_0P1A_TARGET0_0 = 0xff << 23;
        this.PMU_0P1A_FORCE_TIEH_SEL_0 = 1 << 7;
        this.PMU_DATE_REG = this.DR_REG_PMU_BASE + 0x3fc;
        // The value from UARTDEV_BUF_NO when USB-OTG is used
        this.UARTDEV_BUF_NO_USB_OTG = 5;
        // The value from UARTDEV_BUF_NO when USB-JTAG/Serial is used
        this.UARTDEV_BUF_NO_USB_JTAG_SERIAL = 6;
        // Watchdog related registers
        this.DR_REG_LP_WDT_BASE = 0x50116000;
        this.RTC_CNTL_WDTCONFIG0_REG = this.DR_REG_LP_WDT_BASE + 0x0; // LP_WDT_CONFIG0_REG
        this.RTC_CNTL_WDTCONFIG1_REG = this.DR_REG_LP_WDT_BASE + 0x0004; // LP_WDT_CONFIG1_REG
        this.RTC_CNTL_WDTWPROTECT_REG = this.DR_REG_LP_WDT_BASE + 0x0018; // LP_WDT_WPROTECT_REG
        this.RTC_CNTL_WDT_WKEY = 0x50d83aa1;
        this.RTC_CNTL_SWD_CONF_REG = this.DR_REG_LP_WDT_BASE + 0x001c; // RTC_WDT_SWD_CONFIG_REG
        this.RTC_CNTL_SWD_AUTO_FEED_EN = 1 << 18;
        this.RTC_CNTL_SWD_WPROTECT_REG = this.DR_REG_LP_WDT_BASE + 0x0020; // RTC_WDT_SWD_WPROTECT_REG
        this.RTC_CNTL_SWD_WKEY = 0x50d83aa1; // RTC_WDT_SWD_WKEY, same as WDT key in this case
        this.MEMORY_MAP = [
            [0x00000000, 0x00010000, "PADDING"],
            [0x40000000, 0x4c000000, "DROM"],
            [0x4ff00000, 0x4ffa0000, "DRAM"],
            [0x4ff00000, 0x4ffa0000, "BYTE_ACCESSIBLE"],
            [0x4fc00000, 0x4fc20000, "DROM_MASK"],
            [0x4fc00000, 0x4fc20000, "IROM_MASK"],
            [0x40000000, 0x4c000000, "IROM"],
            [0x4ff00000, 0x4ffa0000, "IRAM"],
            [0x50108000, 0x50110000, "RTC_IRAM"],
            [0x50108000, 0x50110000, "RTC_DRAM"],
            [0x600fe000, 0x60100000, "MEM_INTERNAL2"],
        ];
        this.UF2_FAMILY_ID = 0x3d308e94;
        this.EFUSE_MAX_KEY = 5;
        this.KEY_PURPOSES = {
            0: "USER/EMPTY",
            1: "ECDSA_KEY",
            2: "XTS_AES_256_KEY_1",
            3: "XTS_AES_256_KEY_2",
            4: "XTS_AES_128_KEY",
            5: "HMAC_DOWN_ALL",
            6: "HMAC_DOWN_JTAG",
            7: "HMAC_DOWN_DIGITAL_SIGNATURE",
            8: "HMAC_UP",
            9: "SECURE_BOOT_DIGEST0",
            10: "SECURE_BOOT_DIGEST1",
            11: "SECURE_BOOT_DIGEST2",
            12: "KM_INIT_KEY",
        };
    }
    async getPkgVersion(loader) {
        const numWord = 2;
        const addr = this.EFUSE_BLOCK1_ADDR + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        return (registerValue >> 20) & 0x07;
    }
    async getMinorChipVersion(loader) {
        const numWord = 2;
        const addr = this.EFUSE_BLOCK1_ADDR + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        return (registerValue >> 0) & 0x0f;
    }
    async getMajorChipVersion(loader) {
        const numWord = 2;
        const addr = this.EFUSE_BLOCK1_ADDR + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        return (((registerValue >> 23) & 1) << 2) | ((registerValue >> 4) & 0x03);
    }
    async getChipRevision(loader) {
        // ESP32-P4 uses major and minor version, but getChipRevision returns a combined value
        // For compatibility, we'll return major version * 100 + minor version
        const major = await this.getMajorChipVersion(loader);
        const minor = await this.getMinorChipVersion(loader);
        return major * 100 + minor;
    }
    async getStubJsonPath(loader) {
        const chipRevision = await this.getChipRevision(loader);
        if (chipRevision < 300) {
            return "./targets/stub_flasher/stub_flasher_32p4rc1.json";
        }
        else {
            return "./targets/stub_flasher/stub_flasher_32p4.json";
        }
    }
    async getChipDescription(loader) {
        const pkgVersion = await this.getPkgVersion(loader);
        const chipNameMap = {
            0: "ESP32-P4",
        };
        const chipName = chipNameMap[pkgVersion] || "Unknown ESP32-P4";
        const majorRev = await this.getMajorChipVersion(loader);
        const minorRev = await this.getMinorChipVersion(loader);
        return `${chipName} (revision v${majorRev}.${minorRev})`;
    }
    async getChipFeatures(loader) {
        return ["High-Performance MCU"];
    }
    async getCrystalFreq(loader) {
        return 40; // ESP32P4 XTAL is fixed to 40MHz
    }
    async getFlashVoltage(loader) {
        return;
    }
    async overrideVddsdio(loader) {
        loader.debug("VDD_SDIO overrides are not supported for ESP32-P4");
    }
    async readMac(loader) {
        let mac0 = await loader.readReg(this.MAC_EFUSE_REG);
        mac0 = mac0 >>> 0;
        let mac1 = await loader.readReg(this.MAC_EFUSE_REG + 4);
        mac1 = (mac1 >>> 0) & 0x0000ffff;
        const mac = new Uint8Array(6);
        mac[0] = (mac1 >> 8) & 0xff;
        mac[1] = mac1 & 0xff;
        mac[2] = (mac0 >> 24) & 0xff;
        mac[3] = (mac0 >> 16) & 0xff;
        mac[4] = (mac0 >> 8) & 0xff;
        mac[5] = mac0 & 0xff;
        return (this._d2h(mac[0]) +
            ":" +
            this._d2h(mac[1]) +
            ":" +
            this._d2h(mac[2]) +
            ":" +
            this._d2h(mac[3]) +
            ":" +
            this._d2h(mac[4]) +
            ":" +
            this._d2h(mac[5]));
    }
    async getFlashCryptConfig(loader) {
        return; // doesn't exist on ESP32-P4
    }
    async getSecureBootEnabled(loader) {
        const registerValue = await loader.readReg(this.EFUSE_SECURE_BOOT_EN_REG);
        return (registerValue & this.EFUSE_SECURE_BOOT_EN_MASK) !== 0;
    }
    /**
     * Get the UARTDEV_BUF_NO address based on chip revision
     * Variable .bss.UartDev.buff_uart_no in ROM .bss which indicates the port in use.
     * @param {ESPLoader} loader - Loader class to communicate with chip.
     * @returns {number} The UARTDEV_BUF_NO address.
     */
    async getUartdevBufNo(loader) {
        const BUF_UART_NO_OFFSET = 24;
        const chipRev = await this.getChipRevision(loader);
        const BSS_UART_DEV_ADDR = chipRev < 300 ? 0x4ff3feb0 : 0x4ffbfeb0;
        return BSS_UART_DEV_ADDR + BUF_UART_NO_OFFSET;
    }
    /**
     * Check the UARTDEV_BUF_NO register to see if USB-OTG console is being used
     * @param {ESPLoader} loader - Loader class to communicate with chip.
     * @returns {boolean} True if USB-OTG console is being used, false otherwise.
     */
    async usesUsbOtg(loader) {
        const uartBufNoAddr = await this.getUartdevBufNo(loader);
        const uartNo = (await loader.readReg(uartBufNoAddr)) & 0xff;
        return uartNo === this.UARTDEV_BUF_NO_USB_OTG;
    }
    /**
     * Check the UARTDEV_BUF_NO register to see if USB-JTAG/Serial is being used
     * @param {ESPLoader} loader - Loader class to communicate with chip.
     * @returns {boolean} True if USB-JTAG/Serial is being used, false otherwise.
     */
    async usesUsbJtagSerial(loader) {
        // Can't detect USB-JTAG/Serial in secure download mode
        // Note: secure_download_mode check would need to be added to ESPLoader if needed
        // if (loader.secureDownloadMode) {
        //   return false;
        // }
        const uartBufNoAddr = await this.getUartdevBufNo(loader);
        const uartNo = (await loader.readReg(uartBufNoAddr)) & 0xff;
        return uartNo === this.UARTDEV_BUF_NO_USB_JTAG_SERIAL;
    }
    async getKeyBlockPurpose(loader, keyBlock) {
        if (keyBlock < 0 || keyBlock > this.EFUSE_MAX_KEY) {
            loader.debug(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);
            return;
        }
        const regShiftDictionary = [
            [this.EFUSE_PURPOSE_KEY0_REG, this.EFUSE_PURPOSE_KEY0_SHIFT],
            [this.EFUSE_PURPOSE_KEY1_REG, this.EFUSE_PURPOSE_KEY1_SHIFT],
            [this.EFUSE_PURPOSE_KEY2_REG, this.EFUSE_PURPOSE_KEY2_SHIFT],
            [this.EFUSE_PURPOSE_KEY3_REG, this.EFUSE_PURPOSE_KEY3_SHIFT],
            [this.EFUSE_PURPOSE_KEY4_REG, this.EFUSE_PURPOSE_KEY4_SHIFT],
            [this.EFUSE_PURPOSE_KEY5_REG, this.EFUSE_PURPOSE_KEY5_SHIFT],
        ];
        const [reg, shift] = regShiftDictionary[keyBlock];
        const registerValue = await loader.readReg(reg);
        return (registerValue >> shift) & 0xf;
    }
    async isFlashEncryptionKeyValid(loader) {
        // Need to see either an AES-128 key or two AES-256 keys
        const purposes = [];
        for (let i = 0; i <= this.EFUSE_MAX_KEY; i++) {
            const purpose = await this.getKeyBlockPurpose(loader, i);
            purposes.push(purpose);
        }
        if (purposes.some((p) => p === this.PURPOSE_VAL_XTS_AES128_KEY)) {
            return true;
        }
        if (purposes.some((p) => p === this.PURPOSE_VAL_XTS_AES256_KEY_1) &&
            purposes.some((p) => p === this.PURPOSE_VAL_XTS_AES256_KEY_2)) {
            return true;
        }
        // Check if force use key manager key is set
        const registerValue = await loader.readReg(this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_REG);
        return (((registerValue >> this.EFUSE_FORCE_USE_KEY_MANAGER_KEY_SHIFT) & this.FORCE_USE_KEY_MANAGER_VAL_XTS_AES_KEY) !== 0);
    }
    /**
     * Function to be executed after chip connection
     * Sets ESP_RAM_BLOCK if USB OTG is used and disables watchdogs if needed
     * @param {ESPLoader} loader - Loader class to communicate with chip.
     */
    async postConnect(loader) {
        if (await this.usesUsbOtg(loader)) {
            loader.ESP_RAM_BLOCK = this.USB_RAM_BLOCK;
        }
        // Disable watchdogs if not in stub mode (stub manages its own watchdogs)
        // Note: syncStubDetected is private in ESPLoader, but postConnect is called
        // before runStub(), so we're in ROM mode at this point
        if (!loader.IS_STUB) {
            await this.disableWatchdogs(loader);
        }
    }
    /**
     * Disable watchdogs when USB-JTAG/Serial is used
     * The RTC WDT and SWD watchdog are not reset and can reset the board during flashing
     * @param {ESPLoader} loader - Loader class to communicate with chip.
     */
    async disableWatchdogs(loader) {
        if (await this.usesUsbJtagSerial(loader)) {
            // Disable RTC WDT
            await loader.writeReg(this.RTC_CNTL_WDTWPROTECT_REG, this.RTC_CNTL_WDT_WKEY);
            await loader.writeReg(this.RTC_CNTL_WDTCONFIG0_REG, 0);
            await loader.writeReg(this.RTC_CNTL_WDTWPROTECT_REG, 0);
            // Automatically feed SWD
            await loader.writeReg(this.RTC_CNTL_SWD_WPROTECT_REG, this.RTC_CNTL_SWD_WKEY);
            const swdConfReg = await loader.readReg(this.RTC_CNTL_SWD_CONF_REG);
            await loader.writeReg(this.RTC_CNTL_SWD_CONF_REG, swdConfReg | this.RTC_CNTL_SWD_AUTO_FEED_EN);
            await loader.writeReg(this.RTC_CNTL_SWD_WPROTECT_REG, 0);
        }
    }
    /**
     * Check SPI connection pin numbers
     * @param {ESPLoader} loader - Loader class to communicate with chip.
     * @param {number[]} spiConnection - The SPI connection pin numbers.
     */
    checkSpiConnection(loader, spiConnection) {
        if (!spiConnection.every((pin) => pin >= 0 && pin <= 54)) {
            throw new Error("SPI Pin numbers must be in the range 0-54.");
        }
        if (spiConnection.some((pin) => pin === 24 || pin === 25)) {
            loader.debug("GPIO pins 24 and 25 are used by USB-Serial/JTAG, " + "consider using other pins for SPI flash connection.");
        }
    }
    /**
     * Reset the chip using watchdog
     * @param {ESPLoader} loader - Loader class to communicate with chip.
     */
    async watchdogReset(loader) {
        loader.info("Hard resetting with a watchdog...");
        await loader.writeReg(this.RTC_CNTL_WDTWPROTECT_REG, this.RTC_CNTL_WDT_WKEY); // unlock
        await loader.writeReg(this.RTC_CNTL_WDTCONFIG1_REG, 2000); // set WDT timeout
        await loader.writeReg(this.RTC_CNTL_WDTCONFIG0_REG, (1 << 31) | (5 << 28) | (1 << 8) | 2); // enable WDT
        await loader.writeReg(this.RTC_CNTL_WDTWPROTECT_REG, 0); // lock
        await new Promise((resolve) => setTimeout(resolve, 500)); // wait for reset to take effect
    }
    /**
     * Power on the flash chip by setting the appropriate registers
     * Required for ECO6+ when default flash voltage changed from 1.8V to 3.3V
     * @param {ESPLoader} loader - Loader class to communicate with chip.
     */
    async powerOnFlash(loader) {
        // Note: secure_download_mode check would need to be added to ESPLoader if needed
        // if (loader.secureDownloadMode) {
        //   throw new Error("Powering on flash in secure download mode");
        // }
        const chipRev = await this.getChipRevision(loader);
        if (chipRev <= 300) {
            // <=ECO5: The flash chip is powered off by default on >=ECO6, when the default flash
            // voltage changed from 1.8V to 3.3V. This is to prevent damage to 1.8V flash
            // chips. Board designers must set the appropriate voltage level in eFuse.
            return;
        }
        // Power up pad group
        await loader.writeReg(this.LP_SYSTEM_REG_ANA_XPD_PAD_GROUP_REG, 1);
        await new Promise((resolve) => setTimeout(resolve, 10));
        // Flash power up sequence
        let regValue = await loader.readReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG);
        await loader.writeReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG, regValue | this.PMU_ANA_0P1A_EN_CUR_LIM_0);
        regValue = await loader.readReg(this.PMU_EXT_LDO_P0_0P1A_REG);
        await loader.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG, regValue | this.PMU_0P1A_FORCE_TIEH_SEL_0);
        regValue = await loader.readReg(this.PMU_DATE_REG);
        await loader.writeReg(this.PMU_DATE_REG, regValue | (3 << 0));
        await new Promise((resolve) => setTimeout(resolve, 50)); // 0.05 seconds = 50ms
        regValue = await loader.readReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG);
        await loader.writeReg(this.PMU_EXT_LDO_P0_0P1A_ANA_REG, regValue & ~this.PMU_ANA_0P1A_EN_CUR_LIM_0);
        regValue = await loader.readReg(this.PMU_EXT_LDO_P0_0P1A_REG);
        await loader.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG, regValue & ~this.PMU_0P1A_TARGET0_0);
        // Update eFuse voltage to PMU
        regValue = await loader.readReg(this.PMU_EXT_LDO_P0_0P1A_REG);
        await loader.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG, regValue | 0x80);
        regValue = await loader.readReg(this.PMU_EXT_LDO_P0_0P1A_REG);
        await loader.writeReg(this.PMU_EXT_LDO_P0_0P1A_REG, regValue & ~this.PMU_0P1A_FORCE_TIEH_SEL_0);
        await new Promise((resolve) => setTimeout(resolve, 1800)); // 1.8 seconds = 1800ms
    }
}


/***/ }),

/***/ 8555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ESP32ROM: () => (/* binding */ ESP32ROM)
/* harmony export */ });
/* harmony import */ var _rom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2984);

class ESP32ROM extends _rom_js__WEBPACK_IMPORTED_MODULE_0__/* .ROM */ .n {
    constructor() {
        super(...arguments);
        this.CHIP_NAME = "ESP32";
        this.IMAGE_CHIP_ID = 0;
        this.EFUSE_RD_REG_BASE = 0x3ff5a000;
        this.DR_REG_SYSCON_BASE = 0x3ff66000;
        this.UART_CLKDIV_REG = 0x3ff40014;
        this.UART_CLKDIV_MASK = 0xfffff;
        this.UART_DATE_REG_ADDR = 0x60000078;
        this.XTAL_CLK_DIVIDER = 1;
        this.IROM_MAP_START = 0x400d0000;
        this.IROM_MAP_END = 0x40400000;
        this.DROM_MAP_START = 0x3f400000;
        this.DROM_MAP_END = 0x3f800000;
        this.MEMORY_MAP = [
            [0x00000000, 0x00010000, "PADDING"],
            [0x3f400000, 0x3f800000, "DROM"],
            [0x3f800000, 0x3fc00000, "EXTRAM_DATA"],
            [0x3ff80000, 0x3ff82000, "RTC_DRAM"],
            [0x3ff90000, 0x40000000, "BYTE_ACCESSIBLE"],
            [0x3ffae000, 0x40000000, "DRAM"],
            [0x3ffe0000, 0x3ffffffc, "DIRAM_DRAM"],
            [0x40000000, 0x40070000, "IROM"],
            [0x40070000, 0x40078000, "CACHE_PRO"],
            [0x40078000, 0x40080000, "CACHE_APP"],
            [0x40080000, 0x400a0000, "IRAM"],
            [0x400a0000, 0x400bfffc, "DIRAM_IRAM"],
            [0x400c0000, 0x400c2000, "RTC_IRAM"],
            [0x400d0000, 0x40400000, "IROM"],
            [0x50000000, 0x50002000, "RTC_DATA"],
        ];
        this.FLASH_SIZES = {
            "1MB": 0x00,
            "2MB": 0x10,
            "4MB": 0x20,
            "8MB": 0x30,
            "16MB": 0x40,
            "32MB": 0x50,
            "64MB": 0x60,
            "128MB": 0x70,
        };
        this.FLASH_FREQUENCY = {
            "80m": 0xf,
            "40m": 0x0,
            "26m": 0x1,
            "20m": 0x2,
        };
        this.FLASH_WRITE_SIZE = 0x400;
        this.BOOTLOADER_FLASH_OFFSET = 0x1000;
        this.SPI_REG_BASE = 0x3ff42000;
        this.SPI_USR_OFFS = 0x1c;
        this.SPI_USR1_OFFS = 0x20;
        this.SPI_USR2_OFFS = 0x24;
        this.SPI_W0_OFFS = 0x80;
        this.SPI_MOSI_DLEN_OFFS = 0x28;
        this.SPI_MISO_DLEN_OFFS = 0x2c;
    }
    async readEfuse(loader, offset) {
        const addr = this.EFUSE_RD_REG_BASE + 4 * offset;
        loader.debug("Read efuse " + addr);
        return await loader.readReg(addr);
    }
    async getPkgVersion(loader) {
        const word3 = await this.readEfuse(loader, 3);
        let pkgVersion = (word3 >> 9) & 0x07;
        pkgVersion += ((word3 >> 2) & 0x1) << 3;
        return pkgVersion;
    }
    async getChipRevision(loader) {
        const word3 = await this.readEfuse(loader, 3);
        const word5 = await this.readEfuse(loader, 5);
        const apbCtlDate = await loader.readReg(this.DR_REG_SYSCON_BASE + 0x7c);
        const revBit0 = (word3 >> 15) & 0x1;
        const revBit1 = (word5 >> 20) & 0x1;
        const revBit2 = (apbCtlDate >> 31) & 0x1;
        if (revBit0 != 0) {
            if (revBit1 != 0) {
                if (revBit2 != 0) {
                    return 3;
                }
                else {
                    return 2;
                }
            }
            else {
                return 1;
            }
        }
        return 0;
    }
    async getChipDescription(loader) {
        const chipDesc = [
            "ESP32-D0WDQ6",
            "ESP32-D0WD",
            "ESP32-D2WD",
            "",
            "ESP32-U4WDH",
            "ESP32-PICO-D4",
            "ESP32-PICO-V3-02",
        ];
        let chipName = "";
        const pkgVersion = await this.getPkgVersion(loader);
        const chipRevision = await this.getChipRevision(loader);
        const rev3 = chipRevision == 3;
        const single_core = (await this.readEfuse(loader, 3)) & (1 << 0);
        if (single_core != 0) {
            chipDesc[0] = "ESP32-S0WDQ6";
            chipDesc[1] = "ESP32-S0WD";
        }
        if (rev3) {
            chipDesc[5] = "ESP32-PICO-V3";
        }
        if (pkgVersion >= 0 && pkgVersion <= 6) {
            chipName = chipDesc[pkgVersion];
        }
        else {
            chipName = "Unknown ESP32";
        }
        if (rev3 && (pkgVersion === 0 || pkgVersion === 1)) {
            chipName += "-V3";
        }
        return chipName + " (revision " + chipRevision + ")";
    }
    async getChipFeatures(loader) {
        const features = ["Wi-Fi"];
        const word3 = await this.readEfuse(loader, 3);
        const chipVerDisBt = word3 & (1 << 1);
        if (chipVerDisBt === 0) {
            features.push(" BT");
        }
        const chipVerDisAppCpu = word3 & (1 << 0);
        if (chipVerDisAppCpu !== 0) {
            features.push(" Single Core");
        }
        else {
            features.push(" Dual Core");
        }
        const chipCpuFreqRated = word3 & (1 << 13);
        if (chipCpuFreqRated !== 0) {
            const chipCpuFreqLow = word3 & (1 << 12);
            if (chipCpuFreqLow !== 0) {
                features.push(" 160MHz");
            }
            else {
                features.push(" 240MHz");
            }
        }
        const pkgVersion = await this.getPkgVersion(loader);
        if ([2, 4, 5, 6].indexOf(pkgVersion) !== -1) {
            features.push(" Embedded Flash");
        }
        if (pkgVersion === 6) {
            features.push(" Embedded PSRAM");
        }
        const word4 = await this.readEfuse(loader, 4);
        const adcVref = (word4 >> 8) & 0x1f;
        if (adcVref !== 0) {
            features.push(" VRef calibration in efuse");
        }
        const blk3PartRes = (word3 >> 14) & 0x1;
        if (blk3PartRes !== 0) {
            features.push(" BLK3 partially reserved");
        }
        const word6 = await this.readEfuse(loader, 6);
        const codingScheme = word6 & 0x3;
        const codingSchemeArr = ["None", "3/4", "Repeat (UNSUPPORTED)", "Invalid"];
        features.push(" Coding Scheme " + codingSchemeArr[codingScheme]);
        return features;
    }
    async getCrystalFreq(loader) {
        const uartDiv = (await loader.readReg(this.UART_CLKDIV_REG)) & this.UART_CLKDIV_MASK;
        const etsXtal = (loader.transport.baudrate * uartDiv) / 1000000 / this.XTAL_CLK_DIVIDER;
        let normXtal;
        if (etsXtal > 33) {
            normXtal = 40;
        }
        else {
            normXtal = 26;
        }
        if (Math.abs(normXtal - etsXtal) > 1) {
            loader.info("WARNING: Unsupported crystal in use");
        }
        return normXtal;
    }
    _d2h(d) {
        const h = (+d).toString(16);
        return h.length === 1 ? "0" + h : h;
    }
    async readMac(loader) {
        let mac0 = await this.readEfuse(loader, 1);
        mac0 = mac0 >>> 0;
        let mac1 = await this.readEfuse(loader, 2);
        mac1 = mac1 >>> 0;
        const mac = new Uint8Array(6);
        mac[0] = (mac1 >> 8) & 0xff;
        mac[1] = mac1 & 0xff;
        mac[2] = (mac0 >> 24) & 0xff;
        mac[3] = (mac0 >> 16) & 0xff;
        mac[4] = (mac0 >> 8) & 0xff;
        mac[5] = mac0 & 0xff;
        return (this._d2h(mac[0]) +
            ":" +
            this._d2h(mac[1]) +
            ":" +
            this._d2h(mac[2]) +
            ":" +
            this._d2h(mac[3]) +
            ":" +
            this._d2h(mac[4]) +
            ":" +
            this._d2h(mac[5]));
    }
}


/***/ })

};
;