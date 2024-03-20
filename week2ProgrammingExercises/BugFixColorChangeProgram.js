//  Your friend is trying to write a program that draws a square 200 pixels by 200 pixels 
//and that looks like this square with colors red (red value 255), green (green value 255), blue (blue value 255) and
// magenta (red value 255 and blue value 255). All other RGB values are set to 0.
// write your code here
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2 && y > img.getHeight()/2){
    px.setRed(255);
  }
  if (y > img.getHeight()/2){
    px.setBlue(255);
  }
  else if (x > img.getWidth()/2 ){
    px.setGreen(255);
  } 
  if (x < img.getWidth()/2 && y < img.getHeight()/2 ) {
      px.setRed(255);
  }
}
print (img);