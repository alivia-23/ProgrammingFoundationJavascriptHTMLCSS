//Write a function named setBlack that has one parameter pixel 
//(representing a single pixel) and returns pixel with its red, green, and blue 
//components changed so that the pixel’s color is black.
// write a function that will add 10 pixel thick black border to a given image


// write your code here
var img = new SimpleImage("smallpanda.png");
function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}
function addBorder(img) {
    for (var pixel of img.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        
        // left border
        if (x < 10 && y < img.getHeight()) {
            setBlack(pixel);
        }// right border
        else if (x >= img.getWidth() - 10 ) {
            setBlack(pixel);
        }// Top border
        else if(x < img.getWidth() && y < 10) {
            setBlack(pixel);
        }// Bottom border
        else if(y >= img.getHeight() - 10) {
            setBlack(pixel);
        }
    }
    return img;
    
}
print(addBorder(img));