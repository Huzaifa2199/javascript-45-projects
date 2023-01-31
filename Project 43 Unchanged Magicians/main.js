var magicians = ["David Blaine", "David Copperfield", "Apollo Robbins", "Penn and Teller"];

function makeGreat(magicians) {
    var greatMagicians = []
    for(let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

function showMagicians(magicians) {
    for(let magician of magicians) {
        console.log(magician);
    }
}

var greatMagicians = makeGreat(magicians.slice());

console.log("Original Magicians :")
showMagicians(magicians);

console.log("Great Magicians :")
showMagicians(greatMagicians);