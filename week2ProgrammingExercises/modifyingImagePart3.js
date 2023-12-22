var img = new SimpleImage('duke_blue_devil.png');

print(img);     // Print original image

function swapBlueGreen(img) {
    var bluePixel;
    for(var pixel of img.values()) {
        bluePixel = pixel.getBlue();
        if(bluePixel < 255) {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }
}

swapBlueGreen(img);

print(img);     // Print modified image