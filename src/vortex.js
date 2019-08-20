/*
 * Vortex.js
 * Handles Vectors and other utilities.
 */


exports.Vector2 = function(x, y) {
    this.x = x;
    this.y = y;
}

exports.Vector2.prototype.add = function(otherVector) {
    return new exports.Vector2(this.x += otherVector.x, this.y += otherVector.y)
}

exports.Vector2.prototype.subtract = function(otherVector) {
    return new exports.Vector2(this.x -= otherVector.x, this.y -= otherVector.y)
}

exports.Vector2.prototype.multiply = function(otherVector) {
    return new exports.Vector2(this.x *= otherVector.x, this.y *= otherVector.y)
}

exports.Vector2.prototype.divide = function(otherVector) {
    return new exports.Vector2(this.x /= otherVector.x, this.y /= otherVector.y)
}

exports.Vector2.prototype.equals = function(otherVector) {
    if(otherVector.x == this.x && otherVector.y == this.y) {
        return true;
    } else{
        return false;
    }
}

exports.Vector3 = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

exports.Vector3.prototype.add = function(otherVector) {
    return new exports.Vector3(this.x += otherVector.x, this.y += otherVector.y, this.z += otherVector.z)
}

exports.Vector3.prototype.subtract = function(otherVector) {
    return new exports.Vector3(this.x -= otherVector.x, this.y -= otherVector.y, this.z -= otherVector.z)
}

exports.Vector3.prototype.multiply = function(otherVector) {
    return new exports.Vector3(this.x *= otherVector.x, this.y *= otherVector.y, this.z *= otherVector.z)
}

exports.Vector3.prototype.divide = function(otherVector) {
    return new exports.Vector3(this.x /= otherVector.x, this.y /= otherVector.y, this.z /= otherVector.z)
}

exports.Vector3.prototype.equals = function(otherVector) {
    if(otherVector.x == this.x && otherVector.y == this.y && otherVector.z == this.z) {
        return true;
    } else{
        return false;
    }
}

