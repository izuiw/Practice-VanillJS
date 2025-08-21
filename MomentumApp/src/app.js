const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);

  //localStorage에 user저장
  localStorage.setItem("userName", userName);

  greeting.innerHTML = `Hello ${userName}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
});
