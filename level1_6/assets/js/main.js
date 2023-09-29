const selectInput = document.querySelector("#select");
const output = document.querySelector(".output");

selectInput.addEventListener("change", () => {
  output.innerHTML = selectInput.value;
});
