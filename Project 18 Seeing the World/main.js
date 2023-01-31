
let placesToVisit = ["Turkey", "Maldives", "London", "Baku", "Northern Pakistan"];

console.log("Original list: " + placesToVisit);

console.log("Alphabetical order: " + placesToVisit.slice().sort());

console.log("Original list: " + placesToVisit);

console.log("Reverse Alphabetical order: " + placesToVisit.slice().sort().reverse());

console.log("Original list: " + placesToVisit);

placesToVisit.reverse();
console.log("Reversed order: " + placesToVisit);

placesToVisit.reverse();
console.log("Original order: " + placesToVisit);

placesToVisit.sort();
console.log("Alphabetical order: " + placesToVisit);

placesToVisit.sort().reverse();
console.log("Reverse Alphabetical order: " + placesToVisit);
