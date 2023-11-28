var img = new SimpleImage('hilton.jpg');
print(img);
var width = img.getWidth();
for (var pixel of img.values()) {
	// Change the first 1/3 part of image to red
    if(pixel.getX() <= (width / 3)) {
        pixel.setRed(255);
    }
    
    // Change the middle 1/3 part of image to green
    if (pixel.getX() > (width / 3) && pixel.getX() <= (width * 2 / 3)) {
        pixel.setGreen(255);
    }
    
    // Change the last 1/3 part of image to blue
    if(pixel.getX() > (width * 2 / 3)) {
        pixel.setBlue(255);
    }
}

print(img);