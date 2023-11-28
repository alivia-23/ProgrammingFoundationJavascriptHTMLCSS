/**
 * Write a JavaScript function named swapRedGreen with one parameter pixel (representing a single pixel).
 *  This function should swap the red and green values of the pixel. For example, if you have a pixel with 
 * red = 255, green = 100, blue = 150, after calling swapRedGreen on that pixel its new RGB values would be 
 * red = 100, green = 255, blue = 150. 

To test your function, you should choose an image and apply the swapRedGreen function to every pixel in 
the image. The choice of your image is important. For some images you may not notice any change. 
What would happen if you used a completely black image, or a completely white image? 
What about an image with lots of red and not a lot of green? Think about what type of image 
you should use for testing your function. After choosing an image and applying the swapRedGreen
function to every pixel in the image, make sure you print the resulting image so you can see whether
 your function worked correctly.  
 */

var img = new SimpleImage('drewgreen.png'); //hippieflower.jpg

function swapRedGreen(pixel) {
    var r = pixel.getRed();     // Get the red value of the pixel
    var g = pixel.getGreen();   // Get the green value of the pixel
    pixel.setRed(g);            // Swap red with green
    pixel.setGreen(r);          // Swap green with red
}

var testPixel = img.getPixel(50,50);    // Pixel to test

print(testPixel);
print(img);		// Print original image

swapRedGreen(testPixel);

print(testPixel);	// Red and Green pixels should be swaped now
print(img);		// Print modified image