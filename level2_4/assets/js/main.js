const buttonColor = document.querySelector("#button");
const getColor = document.querySelector("#farbeAuswahlen");
const background = document.querySelector("body");

buttonColor.addEventListener("click", () => {
  event.preventDefault();
  const color = getColor.value.toLowerCase().split(" ").join("");
  background.style.backgroundColor = color;
});
