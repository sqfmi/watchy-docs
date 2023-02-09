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
#include "settings.h" //same file as the one from 7_SEG example

class MyFirstWatchFace : public Watchy{ //inherit and extend Watchy class
    public:
        MyFirstWatchFace(const watchySettings& s) : Watchy(s) {}
        void drawWatchFace(){ //override this method to customize how the watch face looks
          display.setFont(&FreeMonoOblique24pt7b);
          display.setCursor(25, 110);
          if(currentTime.Hour < 10){ //use the currentTime struct to print latest time
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

MyFirstWatchFace m(settings); //instantiate your watchface

void setup() {
  m.init(); //call init in setup
}

void loop() {
  // this should never run, Watchy deep sleeps after init();
}
```

### Displaying Images/Icons

Since the E-Paper display is black and white only, you will need to convert any images/icons you wish to display into black and white first.
The image then needs to be converted into a byte array, and stored in Watchy's flash.

#### Convert image to byte array (image2cpp)

You can convert your images to byte arrays using the web tool <ins>[**image2cpp**](http://javl.github.io/image2cpp/)</ins>

1. Upload your image and play around with the settings. If your image is already in black and white then you can just leave the brightness threshold  to default, otherwise if it's in color, you can play with that setting to get the image to look right under preview.

2. In the **Code Output format** option, select *Arduino code*, give it a name under *identifier* and click **Generate code**. Copy the contents in the textarea and paste it in a ```*.h``` file in the same directory as your Arduino sketch.

3. In your watch face file e.g. ```myFirstWatchFace.ino```, include that header file e.g. ```#include "myImage.h"```

4. Use ```display.drawBitmap(x_origin, y_origin, imageByteArrayName, width, height, color)``` in the ```drawWatchFace()``` method to display your image. The order of these draw/print statements matter, so if you call ```display.drawBitmap()``` first, followed by ```display.println("Hello World!")```, the text will be on top of the image.

### Using Fonts

You can use custom fonts by converting them first with the tool <ins>[**truetype2gfx**](https://rop.nl/truetype2gfx/)</ins>

1. Upload your font of choice and set the font size. Click **Get GFX font file** to download the font file e.g. ```Seven_Segment10pt7b.h```.

2. In your watch face file e.g. ```myFirstWatchFace.ino```, include that header file e.g. ```#include "Seven_Segment10pt7b.h"```

3. Use ```display.setFont(&Seven_Segment10pt7b)``` to set the current font face (don't forget the ampersand before the font name). You will have to call the ```display.setFont()``` method each time you wish to use another font. Use ```display.setCursor(x, y)``` to set where to start printing text, the coordinates refer to the *lower left corner* of the text to be printed.

### Quickly Testing Changes

As you develop more complicated watch faces, the repeated process of making a change, compiling it, and uploading it to your Watchy can be cumbersome. It is also challenging to double-check that your watch face can handle all possible conditions (such as weather conditions and step counts) when all your physical Watchy has is real life to report on!

<img src="https://user-images.githubusercontent.com/11475352/136731005-9394fdf6-fd35-4e0f-8e49-5a4b9101c643.png" width="40%" />

For these reasons, the community has developed _WatchySim_ - a simulator for Watchy. WatchySim gives you a Watchy-like SDK to develop your watch faces, but lets you test them in a standard Windows GDI-based application.

If you are interested in exploring that approach, check out [WatchySim on GitHub](https://github.com/LeeHolmes/watchysim).


### Share Your Watch Face!

We'd love to see what you've created! Share your watch face with us and we'll post it on our gallery:

1. Make sure you have a GitHub repo with the source code, and a 200x200 screenshot of the watch face (must be a black and white \*.bmp or \*.gif)
2. Add your watch face to the bottom of this [`json file`](https://github.com/sqfmi/watchy-docs/blob/main/src/pages/watchfaces/watchfaces.json) like so:
```json
    {
        "id" : "ID_NUMBER",
        "name" : "WATCH_FACE_NAME",
        "author" : "AUTHOR",
        "screenshot" : "SCREENSHOT_URL",
        "source" : "GITHUB_URL",
        "ota_bin" : false,
        "version" : "VERSION_NUMBER"
    }  
```
3. You may want to check for other PRs so your ID number is the latest
4. Submit the PR for review and merge
