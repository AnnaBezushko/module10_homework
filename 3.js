// 1) Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.
// Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».

// При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.

// Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:

// 2) Добавить в чат механизм отправки гео-локации:

// При клике на кнопку «Гео-локация» необходимо отправить данные серверу и в чат вывести ссылку на
//  https://www.openstreetmap.org/ с вашей гео-локацией. Сообщение, которое отправит обратно эхо-сервер, не выводить.

const wsUri = "";

const output = document.querySelector(".output");
const sendButton = document.querySelector(".send");
const geolocationButton = document.querySelector(".geolocation");
let websocket;
let allMessages = "";

sendButton.addEventListener("click", postMessage);
geolocationButton.addEventListener("click", geolocation);

function postMessage() {
const messageText = document.querySelector(".messageText").value;
allMessages = `${allMessages} <p class = "message sent">${messageText}</p>`;
output.innerHTML = allMessages
websocket = new WebSocket('wss://echo-ws-service.herokuapp.com');
websocket.onopen = function(e) {
        websocket.send(messageText);
  };
  
  websocket.onmessage = function(event) {

    if (event.data !== "[object GeolocationCoordinates]") {
        allMessages = `${allMessages} <p class = "message received">${event.data}</p>`;
    output.innerHTML = allMessages}
  };
  
//   websocket.onclose = function(event) {
//     if (event.wasClean) {
//       alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
//     } else {
//            alert('[close] Соединение прервано');
//     }
//   };
  
//   websocket.onerror = function(error) {
//     alert(`[error]`);
//  }
}
function geolocation (){
if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { coords } = position;
          const latitude = coords.latitude;
          const longitude = coords.longitude
          allMessages = `${allMessages} <a class = "message received" target="_blank" href=https://www.openstreetmap.org/#map=18/${latitude}/${longitude}>Геолокация</a>`;
          output.innerHTML = allMessages
          websocket.send(coords);
        });
      }
}