const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = "./html/login.html";
});

const registerLink = document.getElementById('register-btn');

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "./html/register.html";
});