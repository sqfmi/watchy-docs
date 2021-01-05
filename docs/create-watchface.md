---
id: create-watchface
title: Create Your Own Watch Face
sidebar_label: Create Your Own Watch Face
slug: /create-watchface
---

The Watchy library makes it easy to create your own custom watch face, we've provided a few examples that all use the same template.

## Basics

To create a basic watch face, you need to simply override the ```drawWatchFace()``` method with your custom code, for example:

```cpp title="myFirstWatchFace.ino"
#include <Watchy.h> //include the Watchy library
#include <Fonts/FreeMonoOblique24pt7b.h> //include any fonts you want to use

class MyFirstWatchFace : public Watchy{ //inherit from Watchy class and name it after your watch face
    public:
        void drawWatchFace(){
          display.setFont(&FreeMonoOblique24pt7b);
          display.setCursor(25, 110);
          if(currentTime.Hour < 10){
          display.print("0");
          }
          display.print(currentTime.Hour);
          display.print(":");
          if(currentTime.Minute < 10){
          display.print("0");
          }  
          display.println(currentTime.Minute);   
        }
};

MyFirstWatchFace m;

void setup() {
  m.init();
}

void loop() {
  // this should never run
}
```

### Converting Images

http://javl.github.io/image2cpp/

### Using Fonts

https://rop.nl/truetype2gfx/