function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    var result = 2 * height + 2 * width;
    return result;
}

console.log(perimeter("rodger.png"));