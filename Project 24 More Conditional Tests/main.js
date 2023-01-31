// Tests for equality and inequality with strings

let bike1 = "Honda";
let bike2 = "Kawasaki";

console.log("Is bike1 == 'Honda'? I predict True.")
console.log(bike1 == "Honda") // True

console.log("Is bike1 == 'Kawasaki'? I predict False.")
console.log(bike1 == "Kawasaki") // False

// Tests using the lower case function

console.log("Is bike1 in lowercase equal to 'honda'? I predict True.")
console.log(bike1.toLowerCase() === 'honda')

console.log("Is bike2 in lowercase equal to 'Kawasaki'? I predict False.")
console.log(bike2.toLowerCase() === 'Kawasaki')

// Numerical tests involving equality and inequality, greater than 
// and less than, greater than or equal to, and less than or equal to.

console.log("Is the length of bike2 greater than the length of bike1? I predict True.")
console.log(bike2.length > bike1.length)

console.log("Is the length of bike2 less than the length of bike1? I predict False.")
console.log(bike2.length < bike1.length)

console.log("Is the length of bike1 greater than or equal to the length of bike2? I predict False.")
console.log(bike1.length >= bike2.length)

console.log("Is the length of bike1 less than or equal to the length of bike2? I predict True.")
console.log(bike1.length <= bike2.length)

console.log("Is the length of bike1 equal to the length of bike2? I predict False.")
console.log(bike1.length == bike2.length)

console.log("Is the length of bike1 not equal to the length of bike2? I predict True.")
console.log(bike1.length != bike2.length)

// Tests using "and" and "or" operators

console.log("Is bike1 == 'Honda' and bike2 == 'Kawasaki'? I predict true.")
console.log(bike1 == "Honda" && bike2 == "Kawasaki")

console.log("Is bike1 == 'Yamaha' or bike2 == 'Honda'? I predict False.")
console.log(bike1 == "Yamaha" || bike2 == "Honda")

// Test whether an item is in a array

let bikes = ["Honda", "Kawasaki", "Yamaha"];

console.log("Is 'Honda' in the bikes array? I predict True.")
console.log(bikes.includes("Honda"));

console.log("Is 'Suzuki' in the bikes array? I predict False.")
console.log(bikes.includes("Suzuki"));

// Test whether an item is not in a array

console.log("Is 'Honda' not in the bikes array? I predict False.")
console.log(!bikes.includes("Honda"));

console.log("Is 'Suzuki' not in the bikes array? I predict True.")
console.log(!bikes.includes("Suzuki"));