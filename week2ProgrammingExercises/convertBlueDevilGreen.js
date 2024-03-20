// Converts Blue Devil image to Green Devil
var image = new SimpleImage("duke_blue_devil.png");
for (var pixel of image.values()) {
    if (pixel.getRed() < 255 && pixel.getGreen() < 255) {
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}
print(image);