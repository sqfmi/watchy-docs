---
id: faqs
title: Frequently Asked Questions
---

### Is the screen E-Ink/E-Paper/LCD/CRT?

E-Ink/E-Paper is the same technology used in devices like the Kindle. E-Ink is a **brand** of electronic paper (E-Paper) displays. Devices like the Pebble use a low power LCD, which **is not** E-Ink or E-Paper.

**Watchy is E-Paper**

![How E-Paper Works](../static/img/epaper.gif)

### Which side is the front/back of the E-Ink display?

The front is the side that's whitish gray, with a white bezel at the bottom. The back is metallic and mirror-like.

### I stuck on the screen the wrong way, help!

- **Do Not Pry Off the Screen!** It is made of glass and prying it off the strong adhesive will definitely crack it
- There is a screen protector on the screen (you can lift it off with the green tab), try to lift it off to save your screen
- You can also slide a thin hobby knife between the screen and the PCB to remove the adhesive. Work slowly!
- Check out this video on Badgy for reference https://www.youtube.com/watch?v=0BzPnMsKN20

### I'm getting a ```Failed to execute script esptool``` error

This is a known issue for macOS 11 "Big Sur", see https://github.com/espressif/arduino-esp32/issues/4408 for solutions

### Why does my display appear "static-y" or ghosting?

- **Make sure you are using the latest version of the GxEDP2 library (i.e. > 1.2.16)** , there is a fix for the GDEH0154D67 display driver
- Ensure the FPC cable is fully inserted, and the lock is in place

### I have another issue, could you help me out?

- Open an issue on our [Github](https://github.com/sqfmi/Watchy/issues), provide additional details on your setup (e.g. OS, Arduino Version, etc.) and photos of your Watchy
