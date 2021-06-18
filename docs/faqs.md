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

### I need to realign/remove the screen, help!
- **Do Not Pry Off the Screen!** It is made of glass and prying it off the strong adhesive will crack it
- **Do Not Use A Heatgun To Melt The Adhesive!** Temperatures over 60C will damage the screen
- Check out this video on how to remove the screen using floss https://youtu.be/OjCd0NY1Yx0

### The case doesn't fit/close, how do I assemble it?

1. Make sure the battery cable is neatly tucked into the slot
![Step 1. Make sure the battery cable is neatly tucked into the slot](../static/img/case_assem/watchy_case_assem_1.jpg)

2. Insert PCB and buttons into the bottom case. Make sure everything sits flush and nothing is popping out.
![Insert PCB and buttons into the bottom case. Make sure everything sits flush and nothing is popping out. Left](../static/img/case_assem/watchy_case_assem_2.jpg)
![Insert PCB and buttons into the bottom case. Make sure everything sits flush and nothing is popping out. Right](../static/img/case_assem/watchy_case_assem_3.jpg)
![Insert PCB and buttons into the bottom case. Make sure everything sits flush and nothing is popping out. Top](../static/img/case_assem/watchy_case_assem_4.jpg)

3. Put on the top case by first hooking the upper snap
![Put on the top case by first hooking the upper snap](../static/img/case_assem/watchy_case_assem_5.jpg)

4. Close down the case with minimal force, there should be a satisfying "click"
![Close down the case with minimal force, there should be a satisfying "click"](../static/img/case_assem/watchy_case_assem_6.jpg)

### I'm getting a ```Failed to execute script esptool``` error

This is a known issue for macOS 11 "Big Sur", see https://github.com/espressif/arduino-esp32/issues/4408 for solutions

### Why does my display appear "static-y" or ghosting?

- **Make sure you are using the latest version of the GxEDP2 library (i.e. > 1.2.16)** , there is a fix for the GDEH0154D67 display driver
- Ensure the FPC cable is fully inserted, and the lock is in place

### I have another issue, could you help me out?

- Open an issue on our [Github](https://github.com/sqfmi/Watchy/issues), provide additional details on your setup (e.g. OS, Arduino Version, etc.) and photos of your Watchy
