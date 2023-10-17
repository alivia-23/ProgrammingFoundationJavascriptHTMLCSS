function printPixel(nameImage, xpos, ypos) {
    var someImg = new SimpleImage(nameImage);
    print("Red", someImg.getRed(xpos, ypos));
    print("Green",someImg.getGreen(xpos, ypos));
    print("Blue", someImg.getBlue(xpos, ypos));
    
}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);