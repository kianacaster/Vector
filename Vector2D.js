// Basic 2D Vector class
class Vector2D{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	// Calculate magnitute of vector
	magnitude(){
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));		
	}

	// Add two vectors together
	add(vector){
		let newVector = new Vector2D(null, null);
		newVector.x = this.x + vector.x;
		newVector.y = this.y + vector.y;
		return newVector;
	}

	// Subtract one vector from another 
	subtract(vector){
		let newVector = new Vector2D(null, null);
		newVector.x = this.x - vector.x;
		newVector.y = this.y - vector.y;
		return newVector;
	}

	// Multiply a vector by a scalar
	multiply(scalar){
		let newVector = new Vector2D(null, null);
		newVector.x = this.x * scalar;
		newVector.y = this.y * scalar;
		return newVector;
	}
}