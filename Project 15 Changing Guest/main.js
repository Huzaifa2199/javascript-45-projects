// Old guests list
console.log("Old guests list:")

let dinnerGuests = ["Dr Qadeer Khan", "Steve Jobs", "Sir Zia"];

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would like to invite you to dinner.`);
}

// Who can't make dinner
console.log("Who can't make dinner:")

console.log(`${dinnerGuests[1]}, can't make the dinner.`);

// Updated guests list
console.log("Updated guests list:")

dinnerGuests[1] = "Elon Musk";

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would like to invite you to dinner.`);
}