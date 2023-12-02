"use strict";(self.webpackChunkwatchy=self.webpackChunkwatchy||[]).push([[162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||l;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/getting-started"},o=void 0,i={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Watchy Kit w/ Case Assembly",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/sqfmi/watchy-docs/edit/main/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/getting-started"},sidebar:"docs",next:{title:"Libraries Used",permalink:"/docs/libs"}},s={},p=[{value:"Watchy Kit w/ Case Assembly",id:"watchy-kit-w-case-assembly",level:2},{value:"Watchy Original Assembly",id:"watchy-original-assembly",level:2},{value:"Arduino Setup",id:"arduino-setup",level:2},{value:"Upload",id:"upload",level:3},{value:"Wifi Setup",id:"wifi-setup",level:3},{value:"Troubleshoot Wifi Setup:",id:"troubleshoot-wifi-setup",level:4},{value:"PlatformIO Setup",id:"platformio-setup",level:2},{value:"Simple watchface example",id:"simple-watchface-example",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"watchy-kit-w-case-assembly"},"Watchy Kit w/ Case Assembly"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Watchy Kit with Case",src:a(7209).Z,width:"4167",height:"4167"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before You Begin")," make sure you review the instructions and inspect for any missing or damaged components."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remove The Components Carefully")," as they are tightly packed for maximum protection. The display is made of glass and will crack if you bend it!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Test Your PCB")," to make sure the board is functional!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do Not Apply The Included Tape!!")," Watchy can be assembled and secured with the included enclosure, without needing any tape. Only apply the tape if you intend to use Watchy without the enclosure, and have triple checked the screen is properly aligned."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect the screen to the FPC connector, the shiny gold pins on the ribbon cable should be facing up. The ribbon cable goes through the PCB slot like in the image above."),(0,r.kt)("li",{parentName:"ol"},"Connect the battery"),(0,r.kt)("li",{parentName:"ol"},"Connect the USB to start charging the battery"),(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("a",{parentName:"li",href:"/docs/hardware#bill-of-materials"},"SW1")," to bring up the ",(0,r.kt)("strong",{parentName:"li"},"menu"),"/",(0,r.kt)("strong",{parentName:"li"},"confirm")),(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("a",{parentName:"li",href:"/docs/hardware#bill-of-materials"},"SW3")," & ",(0,r.kt)("a",{parentName:"li",href:"/docs/hardware#bill-of-materials"},"SW4")," to navigate ",(0,r.kt)("strong",{parentName:"li"},"up"),"/",(0,r.kt)("strong",{parentName:"li"},"down")),(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("a",{parentName:"li",href:"/docs/hardware#bill-of-materials"},"SW2")," to ",(0,r.kt)("strong",{parentName:"li"},"exit/cancel"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Watchy Buttons",src:a(5308).Z,width:"1206",height:"662"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Wait 1 minute to check and see if the clock is updating the time correctly")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tips")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Make sure the screen is perfectly aligned before taping it down!")," It should not extend above or below the strap holes on the PCB.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Watchy Screen Alignment",src:a(4499).Z,width:"828",height:"379"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Make sure the battery cable is tucked in")," Everything should fit snug and be aligned to the bottom case, before securing the top case."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do NOT force the case to close. It could break the screen & buttons!")," The case should close easily with the top and bottom snaps latching."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do NOT overtighten the screws in the aluminum case")," Overtightening will crack the screen! Make sure everything fits nicely and slowly adjust the screws to secure the case."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Still having trouble?")," Check out this step-by-step guide on assembling the case in our ",(0,r.kt)("a",{parentName:"li",href:"/docs/faqs#the-case-doesnt-fitclose-how-do-i-assemble-it"},"FAQ"))),(0,r.kt)("p",null,"Assembly Video: ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ftLTrr_HTpI"},"https://www.youtube.com/watch?v=ftLTrr_HTpI")),(0,r.kt)("p",null,"Assembly Video (CNC Aluminum Case): ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=rbVr9eVb72M"},"https://www.youtube.com/watch?v=rbVr9eVb72M")),(0,r.kt)("h2",{id:"watchy-original-assembly"},"Watchy Original Assembly"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Watchy OG Assembly",src:a(2865).Z,width:"1081",height:"1080"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Apply tape to the ",(0,r.kt)("strong",{parentName:"li"},"back")," of the E-Paper display and battery. The ",(0,r.kt)("strong",{parentName:"li"},"front of the display is white")," and the ",(0,r.kt)("strong",{parentName:"li"},"back of the display is metallic/silver")),(0,r.kt)("li",{parentName:"ol"},"Pull lightly to unlock the FFC connector, insert the display cable through the strap hole. Make sure the cable is inserted all the way, then push the lock back in to secure the cable. "),(0,r.kt)("li",{parentName:"ol"},"Fold back and align the display to the top of the PCB, peel off the tape and firmly secure the display"),(0,r.kt)("li",{parentName:"ol"},"Insert the battery plug, ensure correct polarity (red is closer to the USB connector)"),(0,r.kt)("li",{parentName:"ol"},"Peel off the tape and firmly secure the battery to the PCB"),(0,r.kt)("li",{parentName:"ol"},"Insert the watch strap through the PCB strap holes, then tighten the strap from both ends"),(0,r.kt)("li",{parentName:"ol"},"Wrap the strap around your arm and adjust for comfort")),(0,r.kt)("p",null,"Assembly video: ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=PCPxTS1aF3w"},"https://www.youtube.com/watch?v=PCPxTS1aF3w")),(0,r.kt)("h2",{id:"arduino-setup"},"Arduino Setup"),(0,r.kt)("p",null,"Watchy comes pre-loaded with firmware that demonstrates all the basic features. You can also try different watch faces and examples in Arduino."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and install the latest ",(0,r.kt)("ins",null,(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"Arduino IDE")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Arduino and open File > Preferences.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("em",{parentName:"p"},"Additional Board Manager URLs")," add:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Tools > Board > ",(0,r.kt)("strong",{parentName:"p"},"Boards Manager")," and install the latest version of ",(0,r.kt)("em",{parentName:"p"},"esp32")," platform")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under Sketch > Include Library > Manage Libraries, search for ",(0,r.kt)("strong",{parentName:"p"},"Watchy")," and install the latest version")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure all the dependencies are updated to the latest version i.e. ",(0,r.kt)("strong",{parentName:"p"},"GxEPD2")," , ",(0,r.kt)("strong",{parentName:"p"},"WiFiManager"),", ",(0,r.kt)("strong",{parentName:"p"},"rtc_pcf8563"),",",(0,r.kt)("strong",{parentName:"p"},"etc.")))),(0,r.kt)("h3",{id:"upload"},"Upload"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Plug in the USB on Watchy and select the serial port that shows up"),(0,r.kt)("li",{parentName:"ol"},"If nothing shows up, or if you're having trouble uploading, make sure you have the ",(0,r.kt)("ins",null,(0,r.kt)("a",{parentName:"li",href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"},"USB-Serial drivers"))," installed. Also make sure you're using a USB data cable, and not a charge-only cable. Try different USB ports as well."),(0,r.kt)("li",{parentName:"ol"},"Select Tools > Board > ESP32 Arduino > ",(0,r.kt)("strong",{parentName:"li"},"Watchy")),(0,r.kt)("li",{parentName:"ol"},"Select Tools > Board Revision > ",(0,r.kt)("strong",{parentName:"li"},"Watchy v2.0")),(0,r.kt)("li",{parentName:"ol"},"Select Tools > Partition Scheme > ",(0,r.kt)("strong",{parentName:"li"},"Huge App")),(0,r.kt)("li",{parentName:"ol"},"Leave everything else as default"),(0,r.kt)("li",{parentName:"ol"},"Choose an example and click upload"),(0,r.kt)("li",{parentName:"ol"},"Try modifying the examples or create your own app!")),(0,r.kt)("h3",{id:"wifi-setup"},"Wifi Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click 'Setup Wifi' from main menu on the watch."),(0,r.kt)("li",{parentName:"ol"},"Connect to 'Watchy Ap' wifi from another device such as phone or computer / laptop."),(0,r.kt)("li",{parentName:"ol"},"Open 192.168.4.1 in the browser. On iphone this page open itself when connecting to wifi."),(0,r.kt)("li",{parentName:"ol"},"Click 'Configure WiFi'"),(0,r.kt)("li",{parentName:"ol"},"Enter SSID and password. (Note: SSID can be prefilled by listed networks on the top of this screen)"),(0,r.kt)("li",{parentName:"ol"},"Hit 'Save' button and wait for Watchy."),(0,r.kt)("li",{parentName:"ol"},"If connection failed, the watchy will display 'Setup failed & timed out!', otherwise it will display the local ip address and SSID of the connected network with confirmation.")),(0,r.kt)("h4",{id:"troubleshoot-wifi-setup"},"Troubleshoot Wifi Setup:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click 'Info' from 192.168.4.1 page."),(0,r.kt)("li",{parentName:"ol"},"Check your router setting to make sure the listed mac address is allowed."),(0,r.kt)("li",{parentName:"ol"},"If above didn't fix, then try clicking 'Erase Wifi Config' from 'Info' page and wait for Watchy to restart itself. Once it happen, try the wifi setup again and it should hopefully work.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"platformio-setup"},"PlatformIO Setup"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://platformio.org/"},"PlatformIO")," is a compatible alternative to arduino. It's more oriented for the command line user, but it is also more flexible and predictable in build configurations and dependency management (like libraries)."),(0,r.kt)("p",null,'It has two parts: a "core" that has the command line tools that build and upload/flash, and an "ide" which is a bunch of plugins and extensions for editors you can ',(0,r.kt)("a",{parentName:"p",href:"https://platformio.org/install/integration"},"find here"),"."),(0,r.kt)("p",null,"Use whichever extensions you wish but this documentation is related to the core, so:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.platformio.org/en/latest//core/installation.html"},"Install with instructions here"),".")),(0,r.kt)("h3",{id:"simple-watchface-example"},"Simple watchface example"),(0,r.kt)("p",null,"This example is to create a new watch face project, it starts by copying one of the examples to the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," folder where you can make your own. However, it will not make it easy to edit the watchy library, or its ",(0,r.kt)("inlineCode",{parentName:"p"},"config.h")," file, which many want to, for that see the section below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new folder and setup the PlatformIO project layout")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my_new_watchy_face_project\ncd my_new_watchy_face_project\npio project init --board esp32dev\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the following to the ",(0,r.kt)("inlineCode",{parentName:"li"},"platformio.ini")," file. Note that if you want to use another version of the Watchy library, you can put any file or git path here.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Some users have reported problems with one of the supported RTC modules: The module ",(0,r.kt)("inlineCode",{parentName:"p"},"PCF8563")," seems to be supported during first boots, but their library is overridden by PlatformIO using a broken version - so you need to add an other repository (",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/orbitalair/Rtc_Pcf8563.git"),") to prevent that.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"lib_deps =\n    sqfmi/Watchy ;\n    https://github.com/tzapu/WiFiManager.git#v2.0.11-beta ; Pinned for the same reason\nlib_ldf_mode = deep+\nboard_build.partitions = min_spiffs.csv\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Also pin the version of platform ",(0,r.kt)("inlineCode",{parentName:"li"},"espressif32")," to ensure compatibility.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"  [env:esp32dev]\n- platform = espressif32\n+ platform = espressif32 @ ~3.5.0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run PlatformIO, it will download dependencies such as the Watchy library, but then fail to compile because there aren't any source files in ",(0,r.kt)("inlineCode",{parentName:"li"},"src/")," yet. So when the dependencies are downloaded, copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"7_SEG")," example files to ",(0,r.kt)("inlineCode",{parentName:"li"},"src/"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pio run # will fail compilation but will download dependencies\ncp .pio/libdeps/esp32dev/Watchy/examples/WatchFaces/7_SEG/*.{ino,cpp,h} src/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plug in your watchy, compile and then upload the watch face:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pio run -t upload\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Watch the serial port output")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pio device monitor\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Celebrate by watching ascii star wars")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"telnet towel.blinkenlights.nl\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Additional keys you'll probably want to add to your ",(0,r.kt)("inlineCode",{parentName:"li"},"platformio.ini")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"upload_speed = 3000000\nupload_port = /dev/cu.usbserial-MQK8G8\nmonitor_port = /dev/cu.usbserial-MQK8G8\nmonitor_speed = 115200\nmonitor_filters = esp32_exception_decoder\n")))}d.isMDXComponent=!0},2865:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watchy_assembly_steps-efe4d4e39cc5d62cef3ad227f87a1807.png"},5308:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watchy_buttons_map-71dac914a78e2fb2d6c23cb2dad06802.png"},7209:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watchy_kit_instructions-eeaf3e36c9de35a55d9f7748910c2820.png"},4499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/watchy_screen_align-c60c0dc3fc382fe0af26921866ce2cad.png"}}]);