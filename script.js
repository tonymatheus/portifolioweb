document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

function openRepository() {
  window.open("https://github.com/tonymatheus/FinacasApp");
}
