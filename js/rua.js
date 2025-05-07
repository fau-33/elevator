(function () {
  function criarFaixas() {
    const elementosComFaixas = document.querySelectorAll("[faixas]");
    elementosComFaixas.forEach((elemento) => {
      const qtde = +elemento.getAttribute("faixas");
      for (let i = 0; i < qtde; i++) {
        const faixa = document.createElement("div");
        faixa.classList.add("faixa");
        elemento.appendChild(faixa);
      }
    });
  }

  criarFaixas();
})();
