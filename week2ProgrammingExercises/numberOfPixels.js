function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight(); 
    var width = someImg.getWidth();
    var result = height * width;
    return result;
}

var result = numberPixels("chapel.png");
console.log(result);
result = numberPixels("dinos.png");
console.log(result);