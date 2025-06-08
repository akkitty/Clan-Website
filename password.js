// password.js
function checkPassword(clan) {
    const input = document.getElementById('password').value.trim().toLowerCase();
    const message = document.getElementById('message');

    const correctPasswords = {
        blue: "bluepass",
        red: "redpass",
        green: "greenpass",
        black: "blackpass"
    };

    if (input === correctPasswords[clan]) {
        window.location.href = "security-log.html";
    } else {
        if (message) {
            message.textContent = "Incorrect password. Please try again.";
            message.style.color = "red";
            message.style.marginTop = "10px";
        }
    }
}
