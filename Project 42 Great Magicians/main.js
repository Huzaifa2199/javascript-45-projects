var magicians = ["David Blaine", "David Copperfield", "Apollo Robbins", "Penn and Teller"];

function makeGreat(magicians) {
    for(let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

function showMagicians(magicians) {
    for(let magician of magicians) {
        console.log(magician);
    }
}

makeGreat(magicians);
showMagicians(magicians);
