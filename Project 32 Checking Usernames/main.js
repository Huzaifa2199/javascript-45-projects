let currentUsers = ["Huzaifa", "Owais", "Ali", "Salman", "Junaid"];

let newUsers = ["Huzaifa", "Imran", "Ali", "Zia", "Naeem"];

for (let i = 0; i < newUsers.length; i++) {
    let newUser = newUsers[i];
    let userTaken = currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase());
    if (userTaken) {
        console.log(`Sorry ${newUser}, that username is already taken. Please enter a new username.`);
    } else {
        console.log(`${newUser}, that username is available.`);
    }
}
