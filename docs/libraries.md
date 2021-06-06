---
id: libs
title: Libraries Used
sidebar_label: Libraries Used
slug: /libs
---

The Watchy library depends on other open source libraries to drive all of its hardware, some of which have been wrapped in [```Watchy.h```](https://github.com/sqfmi/Watchy/blob/master/src/Watchy.h) to provide a framework for building watch faces and apps.

## Display Graphics

### GxEPD2

[GxEPD2](https://github.com/ZinggJM/GxEPD2) is an Arduino Display Library for SPI E-Paper Displays. It abstracts the SPI communication required to drive Watchy's E-Paper display, the GDEH0154D67. This library depends on the Adafruit GFX library, which provides the graphic primitives methods for drawing images, shapes, text, etc.

### Adafruit GFX

[Adafruit GFX](https://github.com/adafruit/Adafruit-GFX-Library) provides methods such as ```display.drawRect()``` for drawing shapes, ```display.drawBitmap()``` for drawing images, and ```display.println("Hello World!")``` for printing text.

Visit <ins>[https://learn.adafruit.com/adafruit-gfx-graphics-library/overview](https://learn.adafruit.com/adafruit-gfx-graphics-library/overview)</ins> for more details.

See [**Create Your Own Watch Face**](/docs/create-watchface) to learn how to use custom fonts and converting graphics to byte arrays.

## Time Keeping

### DS3232RTC

[DS3232RTC](https://github.com/JChristensen/DS3232RTC) is an Arduino library for the DS3231 Real-Time Clock. You can set and read the current time/date and configure alarm interrupts. The DS3231 RTC on Watchy is connected over I2C, so it requires the Wire Arduino library. The Watchy library configues *Alarm2* to trigger an interrupt every minute, waking the ESP32 from deep sleep to update the watch face.

## Motion Sensing

### BMA423
[BMA423 Sensor API](https://github.com/BoschSensortec/BMA423-Sensor-API) is a C library for the BMA423, an ultra-small, triaxial, low-g acceleration sensor. The Watchy library provides a simple C++ Arduino API on top to simplify sensor readings such as direction sensing and step counting. The current Watchy library will be updated shortly to utilize the latest implementation from Bosch.

## Connectivity & Data

### WiFiManager

[WiFiManager](https://github.com/tzapu/WiFiManager) sets up an access point captive portal, allowing you to connect and enter your WiFi credentials. These credentials are then saved in ESP32's flash, thus only requiring you to enter them once. Alternatively, you can also hard code your credentials in the ```config.h```.

### Arduino_JSON

[Arduino_JSON](https://github.com/arduino-libraries/Arduino_JSON) is used for parsing JSON string responses from API calls. Check out Watchy's [```getWeather()```](https://github.com/sqfmi/Watchy/blob/1.2.5/src/Watchy.cpp#L591) method example on how its used for parsing data from OpenWeather's REST API.
