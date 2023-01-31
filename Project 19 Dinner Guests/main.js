let dinnerGuests = ["Dr Qadeer Khan", "Steve Jobs", "Sir Zia"];

dinnerGuests[1] = "Elon Musk";

dinnerGuests.unshift("Kashan"); // add to the beginning

dinnerGuests.splice(2, 0, "Junaid"); // add to the middle

dinnerGuests.push("Faisal"); // add to the end

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I apologize but unfortunately, I can only invite two guests..`);
}

while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop();
    console.log(`I am sorry, ${removedGuest}, I cannot invite you to dinner.`);
}

console.log("I am inviting " + dinnerGuests.length + " people to dinner.")

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you are still invited to dinner. Let me know if you are available.`);
}