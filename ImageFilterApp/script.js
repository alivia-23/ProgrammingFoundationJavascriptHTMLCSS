var originalImage = null;
var grayImage = null;
var redImage = null;
var rainbowImage = null;
var canvas = document.getElementById("theCanvas");

function loadImage() {
  var file = document.getElementById("fileInput");
  originalImage = new SimpleImage(file);
  grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  rainbowImage = new SimpleImage(file);
  originalImage.drawTo(canvas);
}

function doGray() {
  if (imageIsLoaded(grayImage)) {
    filterGray();
    grayImage.drawTo(canvas);
  }
}

function filterGray() {
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function doRed() {
  if (imageIsLoaded(redImage)) {
    filterRed();
    redImage.drawTo(canvas);
  }
}

function filterRed() {
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}

function doRainbow() {
    if (imageIsLoaded(rainbowImage)) {
      filterRainbow();
      rainbowImage.drawTo(canvas);
    }
  }

function filterRainbow() {
    var height = rainbowImage.getHeight();
    for (var pixel of rainbowImage.values()) {
      var y = pixel.getY();
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if (y < height / 7) {
        //red
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(2 * avg - 255);
        }
      } else if (y < height * 2 / 7) {
        //orange
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(1.2*avg-51);
          pixel.setBlue(2 * avg - 255);
        }
      } else if (y < height * 3 / 7) {
        //yellow
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2 * avg - 255);
        }
      } else if (y < height * 4 / 7) {
        //green
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(2*avg-255);
          pixel.setGreen(255);
          pixel.setBlue(2 * avg - 255);
        }
      } else if (y < height * 5 / 7) {
        //blue
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        } else {
          pixel.setRed(2*avg-255);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(255);
        }
      } else if (y < height * 6 / 7) {
        //indigo
        if (avg < 128) {
          pixel.setRed(.8*avg);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        } else {
          pixel.setRed(1.2*avg-51);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(255);
        }
      } else {
        //violet
        if (avg < 128) {
          pixel.setRed(1.6*avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6*avg);
        } else {
          pixel.setRed(0.4*avg+153);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(0.4*avg+153);
        }
      }
    }
  }

function reset() {
  if (imageIsLoaded(originalImage)) {
    originalImage.drawTo(canvas);
    grayImage = new SimpleImage(originalImage);
    redImage = new SimpleImage(originalImage);
  }
}

function imageIsLoaded(img) {
  if (img == null || !img.complete()) {
    alert("Image not loaded");
    return false;
  } else {
    return true;
  }
}