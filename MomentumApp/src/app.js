const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const saveUserName = localStorage.getItem(USERNAME_KEY);

function paintGreetiongs(userName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello ${userName}!`;
}

if (saveUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);

    //localStorage에 user저장
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetiongs(userName);
  });
} else {
  paintGreetiongs(saveUserName);
}
