---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /getting-started
---

## Watchy Kit w/ Case Assembly
![Watchy Kit with Case](../static/img/watchy_kit_instructions.png)

**Before You Begin** make sure you review the instructions and inspect for any missing or damaged components.

**Remove The Components Carefully** as they are tightly packed for maximum protection. The display is made of glass and will crack if you bend it!

**Insert & Remove The Battery Carefully** to avoid damaging PCB components

**Test Your PCB** to make sure the board is functional!

**Do Not Apply The Included Tape!!** Watchy can be assembled and secured with the included enclosure, without needing any tape. Only apply the tape if you intend to use Watchy without the enclosure, and have triple checked the screen is properly aligned.

1. Connect the screen to the FPC connector, the shiny gold pins on the ribbon cable should be facing up. The ribbon cable goes through the PCB slot like in the image above.
2. Connect the battery
3. Connect the USB to start charging the battery
4. Press [SW1](/docs/hardware#bill-of-materials) to bring up the **menu**/**confirm**
5. Press [SW3](/docs/hardware#bill-of-materials) & [SW4](/docs/hardware#bill-of-materials) to navigate **up**/**down**
6. Press [SW2](/docs/hardware#bill-of-materials) to **exit/cancel**

![Watchy Buttons](../static/img/watchy_buttons_map.png)

7. Wait 1 minute to check and see if the clock is updating the time correctly

**Tips**

- **Make sure the screen is perfectly aligned before taping it down!** It should not extend above or below the strap holes on the PCB.

![Watchy Screen Alignment](../static/img/watchy_screen_align.png)

- **Make sure the battery cable is tucked in** when assemblign the case. Everything should fit snug and be aligned to the bottom case, before securing the top case.
- **Do NOT force the case to close. It could break the screen & buttons!** The case should close easily with the top and bottom snaps latching.
- **Do NOT overtighten the screws in the aluminum case** Overtightening will crack the screen! Make sure everything fits nicely and slowly adjust the screws to secure the case.
- **Still having trouble?** Check out this step-by-step guide on assembling the case in our [FAQ](/docs/faqs#the-case-doesnt-fitclose-how-do-i-assemble-it)

## Arduino Setup

Watchy comes pre-loaded with firmware that demonstrates all the basic features. You can also try different watch faces and examples in Arduino.

1. Download and install the latest <ins>[Arduino IDE](https://www.arduino.cc/en/software)</ins>
2. Start Arduino and open File > Preferences.
3. Under *Additional Board Manager URLs* add:

    ```
    https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
    ```
4. Open Tools > Board > **Boards Manager** and install **v2.0.17** of **esp32** platform. *Note: there are compatibility issues with v3.x.x*
5. Under Sketch > Include Library > Manage Libraries, search for **Watchy** and install the latest version
6. Make sure all the dependencies are installed i.e. **GxEPD2** , **WiFiManager**, **rtc_pcf8563**,**etc.**

### Enter Bootloader Mode
1. To upload new firmware/watchfaces to Watchy, you will need to enter **bootloader** mode
2. Plug in the USB on Watchy
3. Press and hold the top 2 buttons (Back & Up) for more than 4 seconds, then release the **Back button first**, before releasing the Up button
4. You should now see an ESP32S3 device enumerate a serial port i.e. COM, cu.*

### Uploading New Watchfaces/Firmware

1. Select the serial port for your Watchy
2. If you can't find the serial port, repeat steps above for entering bootloader mode. Also make sure you're using a USB data cable and not a charge-only cable. Try different USB ports as well.
3. Select Tools > Board > ESP32 Arduino > **ESP32S3 Dev Module**
4. Select Tools > Flash Size > **8MB (64Mb)**
5. Select Tools > Partition Scheme > **8M with spiffs...**
6. Leave everything else as default
7. Choose an example and click upload
8. After upload is complete, reset Watchy to run the new uploaded firmware

### How to reset Watchy
1. Press and hold the top 2 buttons (Back & Up) for more than 4 seconds, then release the **Up button first**, before releasing the Back button
2. Watchy should now reset, wait a few seconds for it to boot up and refresh the screen

### Wifi Setup

1. Click 'Setup Wifi' from main menu on the watch.
2. Connect to 'Watchy Ap' wifi from another device such as phone or computer / laptop.
3. Open 192.168.4.1 in the browser. On iphone this page open itself when connecting to wifi.
4. Click 'Configure WiFi'
5. Enter SSID and password. (Note: SSID can be prefilled by listed networks on the top of this screen)
6. Hit 'Save' button and wait for Watchy.
7. If connection failed, the watchy will display 'Setup failed & timed out!', otherwise it will display the local ip address and SSID of the connected network with confirmation.

#### Troubleshoot Wifi Setup:
1. Click 'Info' from 192.168.4.1 page.
2. Check your router setting to make sure the listed mac address is allowed.
3. If above didn't fix, then try clicking 'Erase Wifi Config' from 'Info' page and wait for Watchy to restart itself. Once it happen, try the wifi setup again and it should hopefully work.

---