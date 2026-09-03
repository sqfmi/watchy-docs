# Watch face firmware binaries

Drop merged firmware images for watch faces in this folder. Everything in
`static/` is published as-is to GitHub Pages, so a file at
`static/firmware/Basic.bin` is served at `https://watchy.sqfmi.com/firmware/Basic.bin`.

To enable the **Flash** button for a watch face, add a `firmware` entry to its
object in `src/pages/watchfaces/watchfaces.json`:

```json
{
    "name" : "Basic",
    "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/Basic",
    "firmware" : "/firmware/Basic.bin"
}
```

The image is written to flash address `0x0`, so it must be a *merged* binary
that already contains the bootloader, partition table and application.
Arduino IDE (arduino-esp32 core 2.x or newer) produces one via
*Sketch → Export Compiled Binary* (`<sketch>.ino.merged.bin`), or build one with
esptool:

```sh
esptool.py --chip esp32s3 merge_bin -o Basic.bin \
  0x0 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 Basic.ino.bin
```
