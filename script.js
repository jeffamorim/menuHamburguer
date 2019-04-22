let janelinhaLateral = document.querySelector("div");
let menuHamburguer = document.querySelector("section");
let primeiraLinha = document.querySelector("#primeiro");
let terceiraLinha = document.querySelector("#terceiro");

function abrirMenu() {
  janelinhaLateral.classList.toggle("abrirMenu");
}

 menuHamburguer.onclick = abrirMenu;

