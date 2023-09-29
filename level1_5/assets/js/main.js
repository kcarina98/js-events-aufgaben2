const clickMe = document.querySelector("#clickMe");
let count = 0;

clickMe.addEventListener("click", () => {
  count++;
  clickMe.innerHTML = "Click me: " + count;
});
