const buttonColor = document.querySelector("#button");

const getColor = document.querySelector("#farbeAuswahlen");

buttonColor.addEventListener("click", () => {
  event.preventDefault();
  getColor.remove(getColor.selectedIndex);
});
