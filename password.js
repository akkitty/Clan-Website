// Define correct passwords for each clan
const clanPasswords = {
    blue: "blue123",
    red: "red123",
    black: "black123",
    green: "green123"
};

function checkPassword(clan) {
    let inputPassword = document.getElementById("password").value;
    
    if (inputPassword === clanPasswords[clan]) {
        window.location.href = "security-log.html"; // Redirect to Security Log page
    } else {
        alert("Incorrect password! Try again.");
    }
}
