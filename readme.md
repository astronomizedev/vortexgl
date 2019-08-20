# VortexGL
VortexGL(Vortex Game Library) is a library for developing games and applications for Javascript.

### Installing
```
npm install vortexgl
```

### Usage
#### Creating A Vector2/Vector3
First, import VectorGL into your javascript project.
```javascript
var vortexgl = require('vortexgl')
```
Now you can create a vector like so;
```javascript
var myVector3 = new vortexgl.Vector3(1, 2, 3)
var myVector2 = new vortexgl.Vector2(1, 2)
```

### Modifying Vectors
You can modify a single value of a vector by using `Vector2.prototype.[value]` or `Vector3.prototype.[value]`, or, you can modify them by another vector, like this:
```javascript
var myVector3 = new vortexgl.Vector3(1, 2, 3)
var myOtherVector3 = new vortexgl.Vector3(1, 2, 3)

// adds the values of myOtherVector3 onto the values of myVector3.
var addedVector = myVector3.add(myOtherVector3)

// subtracts the values of myOtherVector3 from the values of myVector3.
var subtractedVector = myVector3.subtract(myOtherVector3)

// multiplies the values of myOtherVector3 onto the values of myVector3.
var multipliedVector = myVector3.multiply(myOtherVector3)

// divides the values of myOtherVector3 from the values of myVector3.
var dividedVector = myVector3.divide(myOtherVector3)
```
You can also do the same with a Vector2.

```javascript
var myVector2 = new vortexgl.Vector2(1, 2, 3)
var myOtherVector2 = new vortexgl.Vector3(1, 2, 3)

// adds the values of myOtherVector2 onto the values of myVector2.
var addedVector = myVector2.add(myOtherVector2)

// subtracts the values of myOtherVector2 from the values of myVector2.
var subtractedVector = myVector2.subtract(myOtherVector2)

// multiplies the values of myOtherVector2 onto the values of myVector2.
var multipliedVector = myVector2.multiply(myOtherVector2)

// divides the values of myOtherVector2 from the values of myVector2.
var dividedVector = myVector2.divide(myOtherVector2)
```