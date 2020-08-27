document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

function openRepository() {
  window.open("https://github.com/tonymatheus/FinacasApp");
}

//Calculo  de página
document.querySelector("#qtde").addEventListener("change", atualizaPreco);
document.querySelector("#js").addEventListener("change", atualizaPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizaPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizaPreco);
document.querySelector("#prazo").addEventListener("change", function () {
  const prazo = document.querySelector("#prazo").value;

  document.querySelector(
    "label[for=prazo]"
  ).innerHTML = `Prazo:${prazo} Semanas`;

  atualizaPreco();
});

function atualizaPreco() {
  const quantidade = document.querySelector("#qtde").value;
  const temJs = document.querySelector("#js").checked;
  const PrecisaDelayout = document.querySelector("#layout-sim").checked;
  const prazo = document.querySelector("#prazo").value;

  let preco = quantidade * 100;
  if (temJs) preco *= 1.1;
  if (PrecisaDelayout) preco += 500;
  let taxaDeUrgencia = 1 - prazo * 0.1;
  preco *= 1 + taxaDeUrgencia;

  document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}
