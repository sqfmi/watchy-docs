---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /getting-started
---

Watchy comes pre-loaded with firmware that demonstrates all the basic features. You can test out different watch faces over here.

## Arduino Setup

1. Download and install the latest <ins>[Arduino IDE](https://www.arduino.cc/en/software)</ins>
2. Start Arduino and open Preferences window.
3. Under *Additional Board Manager URLs* add:

    ```
    https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
    ```
4. Open Boards Manager from Tools > Board menu and install the *esp32* platform
5. Select **ESP32 Dev Module** under Tools > Board > ESP32 Arduino
6. Select **Minimal SPIFFS** under Tools > Partition Scheme
7. Plug in USB on Watchy and select the serial port that shows up
8. Leave everything else as default
---

## Libraries

1. Search for **Watchy** and install the latest version under Sketch > Include Library > Manage Libraries
2. Install any dependencies as well if prompted

## Upload

1. Choose an example and hit upload
2. Try modifiying the examples or create your own app!