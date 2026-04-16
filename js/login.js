let login = document.getElementById("Login-btn");

login.addEventListener("click", async (e) => {
    e.preventDefault();
    const usernameTest = "test";
    const passwordTest = "test";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }

    if(!username.match(/^[a-zA-Z0-9]+$/)) {
        const username = document.getElementById("username");
        username.classList.add("border-red-500");
        alert("Username can only contain letters and numbers");
        return;
    } else {
        const username = document.getElementById("username");
        username.classList.remove("border-red-500");
    }

    window.location.href = "../html/dashboard.html";
});