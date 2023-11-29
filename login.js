let loginDiv = document.getElementById("login");
let loginText = document.getElementById("loginText");
let user = document.getElementById("username");
let pass = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let container1 = document.getElementById("container1");
let userAdmin = "admin";
let passAdmin = "admin";

function show() {
    if (user.value == userAdmin && pass.value == passAdmin) {
        document.getElementById("login").style.display = "none";
        document.getElementById("container1").style.display = "flex";
    } else {
        loginText.textContent = "You need to fill username and password boxes properly!";
        loginText.style.color = "red"
        setTimeout(()=> {
            loginText.textContent = "Please login first:";
            loginText.style.color = "initial";
        }, 2000)
    }
}