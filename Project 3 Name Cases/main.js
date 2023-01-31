let nameCases = "huzaifa"

console.log(nameCases.toLowerCase()); // "huzaifa"

console.log(nameCases.toUpperCase()); // "HUZAIFA"

var firstChar = nameCases.slice(0, 1).toUpperCase();
var otherChar = nameCases.slice(1).toLowerCase();

var titleCase = firstChar + otherChar;

console.log(titleCase); // "Huzaifa"