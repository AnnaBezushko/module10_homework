// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 
const buttonNode = document.querySelector(".button");
buttonNode.addEventListener("click", () => {
  alert (`ширина экрана - ${window.screen.width}, высота экрана - ${window.screen.height}`)
});
