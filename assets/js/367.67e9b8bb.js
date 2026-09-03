"use strict";
exports.id = 367;
exports.ids = [367,555,610,845];
exports.modules = {

/***/ 1845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ESP32C3ROM: () => (/* binding */ ESP32C3ROM)
/* harmony export */ });
/* harmony import */ var _esp32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8555);

class ESP32C3ROM extends _esp32_js__WEBPACK_IMPORTED_MODULE_0__.ESP32ROM {
    constructor() {
        super(...arguments);
        this.CHIP_NAME = "ESP32-C3";
        this.IMAGE_CHIP_ID = 5;
        this.EFUSE_BASE = 0x60008800;
        this.MAC_EFUSE_REG = this.EFUSE_BASE + 0x044;
        this.UART_CLKDIV_REG = 0x3ff40014;
        this.UART_CLKDIV_MASK = 0xfffff;
        this.UART_DATE_REG_ADDR = 0x6000007c;
        this.FLASH_WRITE_SIZE = 0x400;
        this.BOOTLOADER_FLASH_OFFSET = 0;
        this.SPI_REG_BASE = 0x60002000;
        this.SPI_USR_OFFS = 0x18;
        this.SPI_USR1_OFFS = 0x1c;
        this.SPI_USR2_OFFS = 0x20;
        this.SPI_MOSI_DLEN_OFFS = 0x24;
        this.SPI_MISO_DLEN_OFFS = 0x28;
        this.SPI_W0_OFFS = 0x58;
        this.IROM_MAP_START = 0x42000000;
        this.IROM_MAP_END = 0x42800000;
        this.MEMORY_MAP = [
            [0x00000000, 0x00010000, "PADDING"],
            [0x3c000000, 0x3c800000, "DROM"],
            [0x3fc80000, 0x3fce0000, "DRAM"],
            [0x3fc88000, 0x3fd00000, "BYTE_ACCESSIBLE"],
            [0x3ff00000, 0x3ff20000, "DROM_MASK"],
            [0x40000000, 0x40060000, "IROM_MASK"],
            [0x42000000, 0x42800000, "IROM"],
            [0x4037c000, 0x403e0000, "IRAM"],
            [0x50000000, 0x50002000, "RTC_IRAM"],
            [0x50000000, 0x50002000, "RTC_DRAM"],
            [0x600fe000, 0x60100000, "MEM_INTERNAL2"],
        ];
    }
    async getPkgVersion(loader) {
        const numWord = 3;
        const block1Addr = this.EFUSE_BASE + 0x044;
        const addr = block1Addr + 4 * numWord;
        const word3 = await loader.readReg(addr);
        const pkgVersion = (word3 >> 21) & 0x07;
        return pkgVersion;
    }
    async getChipRevision(loader) {
        const block1Addr = this.EFUSE_BASE + 0x044;
        const numWord = 3;
        const pos = 18;
        const addr = block1Addr + 4 * numWord;
        const ret = ((await loader.readReg(addr)) & (0x7 << pos)) >> pos;
        return ret;
    }
    async getMinorChipVersion(loader) {
        const hiNumWord = 5;
        const hiAddr = this.EFUSE_BASE + 0x044 + 4 * hiNumWord;
        const hi = ((await loader.readReg(hiAddr)) >> 23) & 0x01;
        const lowNumWord = 3;
        const lowAddr = this.EFUSE_BASE + 0x044 + 4 * lowNumWord;
        const low = ((await loader.readReg(lowAddr)) >> 18) & 0x07;
        return (hi << 3) + low;
    }
    async getMajorChipVersion(loader) {
        const numWord = 5;
        const addr = this.EFUSE_BASE + 0x044 + 4 * numWord;
        return ((await loader.readReg(addr)) >> 24) & 0x03;
    }
    async getChipDescription(loader) {
        const chipDesc = {
            0: "ESP32-C3 (QFN32)",
            1: "ESP8685 (QFN28)",
            2: "ESP32-C3 AZ (QFN32)",
            3: "ESP8686 (QFN24)",
        };
        const chipIndex = await this.getPkgVersion(loader);
        const majorRev = await this.getMajorChipVersion(loader);
        const minorRev = await this.getMinorChipVersion(loader);
        return `${chipDesc[chipIndex] || "Unknown ESP32-C3"} (revision v${majorRev}.${minorRev})`;
    }
    async getFlashCap(loader) {
        const numWord = 3;
        const block1Addr = this.EFUSE_BASE + 0x044;
        const addr = block1Addr + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        const flashCap = (registerValue >> 27) & 0x07;
        return flashCap;
    }
    async getFlashVendor(loader) {
        const numWord = 4;
        const block1Addr = this.EFUSE_BASE + 0x044;
        const addr = block1Addr + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        const vendorId = (registerValue >> 0) & 0x07;
        const vendorMap = {
            1: "XMC",
            2: "GD",
            3: "FM",
            4: "TT",
            5: "ZBIT",
        };
        return vendorMap[vendorId] || "";
    }
    async getChipFeatures(loader) {
        const features = ["Wi-Fi", "BLE"];
        const flashMap = {
            0: null,
            1: "Embedded Flash 4MB",
            2: "Embedded Flash 2MB",
            3: "Embedded Flash 1MB",
            4: "Embedded Flash 8MB",
        };
        const flashCap = await this.getFlashCap(loader);
        const flashVendor = await this.getFlashVendor(loader);
        const flash = flashMap[flashCap];
        const flashDescription = flash !== undefined ? flash : "Unknown Embedded Flash";
        if (flash !== null) {
            features.push(`${flashDescription} (${flashVendor})`);
        }
        return features;
    }
    async getCrystalFreq(loader) {
        return 40;
    }
    _d2h(d) {
        const h = (+d).toString(16);
        return h.length === 1 ? "0" + h : h;
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
    getEraseSize(offset, size) {
        return size;
    }
}


/***/ }),

/***/ 3367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ESP32C61ROM: () => (/* binding */ ESP32C61ROM)
/* harmony export */ });
/* harmony import */ var _esp32c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9610);

class ESP32C61ROM extends _esp32c6__WEBPACK_IMPORTED_MODULE_0__.ESP32C6ROM {
    constructor() {
        super(...arguments);
        this.CHIP_NAME = "ESP32-C61";
        this.IMAGE_CHIP_ID = 20;
        this.CHIP_DETECT_MAGIC_VALUE = [0x33f0206f, 0x2421606f];
        this.UART_DATE_REG_ADDR = 0x60000000 + 0x7c;
        this.EFUSE_BASE = 0x600b4800;
        this.EFUSE_BLOCK1_ADDR = this.EFUSE_BASE + 0x044;
        this.MAC_EFUSE_REG = this.EFUSE_BASE + 0x044;
        this.EFUSE_RD_REG_BASE = this.EFUSE_BASE + 0x030; // BLOCK0 read base address
        this.EFUSE_PURPOSE_KEY0_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_PURPOSE_KEY0_SHIFT = 0;
        this.EFUSE_PURPOSE_KEY1_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_PURPOSE_KEY1_SHIFT = 4;
        this.EFUSE_PURPOSE_KEY2_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_PURPOSE_KEY2_SHIFT = 8;
        this.EFUSE_PURPOSE_KEY3_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_PURPOSE_KEY3_SHIFT = 12;
        this.EFUSE_PURPOSE_KEY4_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_PURPOSE_KEY4_SHIFT = 16;
        this.EFUSE_PURPOSE_KEY5_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_PURPOSE_KEY5_SHIFT = 20;
        this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG = this.EFUSE_RD_REG_BASE;
        this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT = 1 << 20;
        this.EFUSE_SPI_BOOT_CRYPT_CNT_REG = this.EFUSE_BASE + 0x030;
        this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK = 0x7 << 23;
        this.EFUSE_SECURE_BOOT_EN_REG = this.EFUSE_BASE + 0x034;
        this.EFUSE_SECURE_BOOT_EN_MASK = 1 << 26;
        this.FLASH_FREQUENCY = {
            "80m": 0xf,
            "40m": 0x0,
            "20m": 0x2,
        };
        this.IROM_MAP_START = 0x42000000;
        this.IROM_MAP_END = 0x42800000;
        this.MEMORY_MAP = [
            [0x00000000, 0x00010000, "PADDING"],
            [0x41800000, 0x42000000, "DROM"],
            [0x40800000, 0x40860000, "DRAM"],
            [0x40800000, 0x40860000, "BYTE_ACCESSIBLE"],
            [0x4004ac00, 0x40050000, "DROM_MASK"],
            [0x40000000, 0x4004ac00, "IROM_MASK"],
            [0x41000000, 0x41800000, "IROM"],
            [0x40800000, 0x40860000, "IRAM"],
            [0x50000000, 0x50004000, "RTC_IRAM"],
            [0x50000000, 0x50004000, "RTC_DRAM"],
            [0x600fe000, 0x60100000, "MEM_INTERNAL2"],
        ];
        this.UF2_FAMILY_ID = 0x77d850c4;
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
            13: "XTS_AES_256_KEY_1_PSRAM",
            14: "XTS_AES_256_KEY_2_PSRAM",
            15: "XTS_AES_128_KEY_PSRAM",
        };
    }
    async getPkgVersion(loader) {
        const numWord = 2;
        return ((await loader.readReg(this.EFUSE_BLOCK1_ADDR + 4 * numWord)) >> 26) & 0x07;
    }
    async getMinorChipVersion(loader) {
        const numWord = 2;
        return ((await loader.readReg(this.EFUSE_BLOCK1_ADDR + 4 * numWord)) >> 0) & 0x0f;
    }
    async getMajorChipVersion(loader) {
        const numWord = 2;
        return ((await loader.readReg(this.EFUSE_BLOCK1_ADDR + 4 * numWord)) >> 4) & 0x03;
    }
    async getChipDescription(loader) {
        const pkgVer = await this.getPkgVersion(loader);
        let desc;
        if (pkgVer === 0) {
            desc = "ESP32-C61";
        }
        else {
            desc = "unknown ESP32-C61";
        }
        const majorRev = await this.getMajorChipVersion(loader);
        const minorRev = await this.getMinorChipVersion(loader);
        return `${desc} (revision v${majorRev}.${minorRev})`;
    }
    async getChipFeatures(loader) {
        return ["WiFi 6", "BT 5"];
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


/***/ }),

/***/ 9610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ESP32C6ROM: () => (/* binding */ ESP32C6ROM)
/* harmony export */ });
/* harmony import */ var _esp32c3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1845);

class ESP32C6ROM extends _esp32c3_js__WEBPACK_IMPORTED_MODULE_0__.ESP32C3ROM {
    constructor() {
        super(...arguments);
        this.CHIP_NAME = "ESP32-C6";
        this.IMAGE_CHIP_ID = 13;
        this.EFUSE_BASE = 0x600b0800;
        this.EFUSE_BLOCK1_ADDR = this.EFUSE_BASE + 0x044;
        this.MAC_EFUSE_REG = this.EFUSE_BASE + 0x044;
        this.UART_CLKDIV_REG = 0x3ff40014;
        this.UART_CLKDIV_MASK = 0xfffff;
        this.UART_DATE_REG_ADDR = 0x6000007c;
        this.FLASH_WRITE_SIZE = 0x400;
        this.BOOTLOADER_FLASH_OFFSET = 0;
        this.SPI_REG_BASE = 0x60002000;
        this.SPI_USR_OFFS = 0x18;
        this.SPI_USR1_OFFS = 0x1c;
        this.SPI_USR2_OFFS = 0x20;
        this.SPI_MOSI_DLEN_OFFS = 0x24;
        this.SPI_MISO_DLEN_OFFS = 0x28;
        this.SPI_W0_OFFS = 0x58;
        this.IROM_MAP_START = 0x42000000;
        this.IROM_MAP_END = 0x42800000;
        this.MEMORY_MAP = [
            [0x00000000, 0x00010000, "PADDING"],
            [0x42000000, 0x43000000, "DROM"],
            [0x40800000, 0x40880000, "DRAM"],
            [0x40800000, 0x40880000, "BYTE_ACCESSIBLE"],
            [0x4004ac00, 0x40050000, "DROM_MASK"],
            [0x40000000, 0x4004ac00, "IROM_MASK"],
            [0x42000000, 0x43000000, "IROM"],
            [0x40800000, 0x40880000, "IRAM"],
            [0x50000000, 0x50004000, "RTC_IRAM"],
            [0x50000000, 0x50004000, "RTC_DRAM"],
            [0x600fe000, 0x60100000, "MEM_INTERNAL2"],
        ];
    }
    async getPkgVersion(loader) {
        const numWord = 3;
        const block1Addr = this.EFUSE_BASE + 0x044;
        const addr = block1Addr + 4 * numWord;
        const word3 = await loader.readReg(addr);
        const pkgVersion = (word3 >> 21) & 0x07;
        return pkgVersion;
    }
    async getChipRevision(loader) {
        const block1Addr = this.EFUSE_BASE + 0x044;
        const numWord = 3;
        const pos = 18;
        const addr = block1Addr + 4 * numWord;
        const ret = ((await loader.readReg(addr)) & (0x7 << pos)) >> pos;
        return ret;
    }
    async getChipDescription(loader) {
        let desc;
        const pkgVer = await this.getPkgVersion(loader);
        if (pkgVer === 0) {
            desc = "ESP32-C6";
        }
        else {
            desc = "unknown ESP32-C6";
        }
        const chipRev = await this.getChipRevision(loader);
        desc += " (revision " + chipRev + ")";
        return desc;
    }
    async getChipFeatures(loader) {
        return ["Wi-Fi 6", "BT 5", "IEEE802.15.4"];
    }
    async getCrystalFreq(loader) {
        return 40;
    }
    _d2h(d) {
        const h = (+d).toString(16);
        return h.length === 1 ? "0" + h : h;
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
    getEraseSize(offset, size) {
        return size;
    }
}


/***/ })

};
;