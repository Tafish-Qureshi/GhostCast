const registerBtn = document.getElementById('Register-btn');

registerBtn.addEventListener ('click', async(e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert("Fill in all fields");
        return;
    }
    
    // haal bestaande users op
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check of email al bestaat
    const exists = users.some(user => user.email === email);
    if (exists) {
        alert("User already exists");
        return;
    }
    
    // nieuwe user toevoegen
    users.push({
        username,
        email,
        password
    });
    
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Registered successfully!");
    console.log("please focking work");
    window.location.href = "../html/login.html";
});