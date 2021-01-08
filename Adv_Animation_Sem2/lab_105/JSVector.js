// JSVector -- a Javascript 2D vector class
//  Add your name here
//  Add project name here
// The class constructor
function JSVector(x = 0,y = 0){
        this.x = x;
        this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
  let direction = this.getDirection();
  this.x = Math.cos(direction) * mag;
  this.y = Math.sin(direction) * mag;
  return this;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
  return(Math.sqrt((this.x * this.x)+(this.y * this.y)));

}

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
  let mag = this.getMagnitude();
  this.x = Math.cos(angle) * mag; // direction
  this.y = Math.sin(angle) * mag;
  return this;
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
  return(Math.atan2(this.y,this.x));
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
  this.x = this.x + v2.x;
  this.y = this.y + v2.y;
  return this;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
  this.x = this.x - v2.x;
  this.y = this.y - v2.y;
  return this;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
  return (new JSVector(v1.x+v2.x, v1.y+v2.y));
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
  return (new JSVector(v1.x-v2.x, v1.y-v2.y));
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
  this.x = this.x * scalar;
  this.y = this.y * scalar;
  return this;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
  this.x = this.x / scalar;
  this.y = this.y / scalar;
  return this;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
  this.setMagnitude(1);
  return this;
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){
  if(this.getMagnitude() > lim){
    this.setMagnitude(lim);
  }
  return this;
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){
  let xDis = this.x - v2.x;
  let yDis = this.y - v2.y;
  return(Math.sqrt(Math.pow(xDis,2) + Math.pow(yDis,2)));
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){
  let distance = this.distance(v2);
  return(Math.pow(distance, 2));
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos|

JSVector.prototype.rotate = function(angle) {
  let x = this.x, y = this.y;
  let cos = Math.cos(angle);
  let sin = Math.sin(angle);
  this.x = x * cos - y * sin;
  this.y = x * sin + y * cos;
  return(this);
}

// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){
  let ang  = (this.x * v2.x) + (this.y * v2.y);
  return(Math.cos(ang/(this.vector*v2)));
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
  return(new JSVector(this.x, this.y));
}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {
  let x = this.x.toFixed(2);
  let y = this.y.toFixed(2);
  let mag = this.getMagnitude().toFixed(2);
  let dir = (this.getDirection()*360/(2*Math.PI)).toFixed(2);
  return("x: " + x + "y: " + y + "mag: " + mag + "dir: " + dir);
}
