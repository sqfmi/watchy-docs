---
id: battery-life
title: Battery Life
sidebar_label: Battery Life
slug: /battery-life
---

Watchy wakes up every 60 seconds to check the accelerometer, real-time clock, and updates the E-Paper display with the latest information. Certain watch faces also turn on WiFi to fetch weather data.

With only time keeping, Watchy should have a battery life of 5-7 days, while with fetching data over WiFi, it should last between 2-3 days. These numbers can be extended through further optimizations (e.g. sleep during off hours, waking up only on motion/tilt, etc.).

## Tips

- Put Watchy to deep sleep if it's not doing anything, the ESP32 is powerful and power hungry, leaving it idling will drain the battery and create unwanted heat. This is already done for you in the ```init()``` method, so there is no need to explicitly call it again unless you are doing something outside of the Watchy class.
```cpp
    void Watchy::deepSleep(){
        esp_sleep_enable_ext0_wakeup(RTC_PIN, 0); //enable deep sleep wake on RTC interrupt
        esp_sleep_enable_ext1_wakeup(BTN_PIN_MASK, ESP_EXT1_WAKEUP_ANY_HIGH); //enable deep sleep wake on button press
        esp_deep_sleep_start();
    }
```
- Turn off the radio after using WiFi/Bluetooth for communications. This will maximize Watchy's battery life.
```cpp
    //turn off radios
    WiFi.mode(WIFI_OFF);
    btStop();
```
- Put the display to sleep after updating: ```display.hibernate()```. This is already done for you, so there is no need to explicitly call it again unless you are doing something outside of the Watchy class.
- If your watch face does not require a step counter, you can skip initializing and reading from the BMA423 accelerometer.
- If your watch face does not require 60 second updates (e.g. word clock), you can change the RTC alarm trigger to a longer period