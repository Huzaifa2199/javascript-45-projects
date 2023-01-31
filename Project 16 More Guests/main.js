let dinnerGuests = ["Dr Qadeer Khan", "Steve Jobs", "Sir Zia"];

dinnerGuests[1] = "Elon Musk";

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, Good news! I have found a bigger dinner table and can now invite more guests.`);
}

dinnerGuests.unshift("Kashan"); // add to the beginning

dinnerGuests.splice(2, 0, "Junaid"); // add to the middle

dinnerGuests.push("Faisal"); // add to the end

for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would like to invite you to dinner.`);
}