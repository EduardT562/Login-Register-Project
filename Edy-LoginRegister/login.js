let loginBtn = document.getElementById("login");
let registerBtn = document.getElementById("register");
let switchBtn = document.getElementById("btn");
let result = document.getElementById("result");
function register() {
  loginBtn.style.left = "-400px";
  registerBtn.style.left = "50px";
  switchBtn.style.left = "110px";
}
function login() {
  loginBtn.style.left = "50px";
  registerBtn.style.left = "450px";
  switchBtn.style.left = "0";
}

function loginFunc() {
  let username = document.getElementById("login-username").value;
  let pass = document.getElementById("login-password").value;
  let result = document.getElementById("result");

  let user = localStorage.getItem(username);
  let data = JSON.parse(user);
  console.log(typeof data);

  if (user == null) {
    result.innerHTML = "Wrong username";
    result.style.color = "red";
  } else if (username == data.username && pass == data.password) {
    result.innerHTML = "Logged in";
    result.style.color = "green";
  } else {
    result.innerHTML = "Wrong password";
    result.style.color = "red";
  }
}

function signUp() {
  let email = document.getElementById("email").value;
  let username = document.getElementById("register-username").value;
  let pass = document.getElementById("register-password").value;

  let user = {
    email: email,
    username: username,
    password: pass,
  };

  let json = JSON.stringify(user);
  localStorage.setItem(username, json);
  console.log("user added");
}
