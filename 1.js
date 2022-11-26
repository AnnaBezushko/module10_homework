// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео).
//  При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.

const buttonNode = document.querySelector(".j-btn-test");
const whiteNode =  document.querySelector(".white");
const blackNode =  document.querySelector(".black");
buttonNode.addEventListener("click", () => {
  whiteNode.classList.toggle('none');
  blackNode.classList.toggle('none');
});