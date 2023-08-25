import { bEditar } from "./bEditar.js";
import { excluirTransacao } from "./bExcluir.js";
import { criarSpan } from "./criarSpan.js";
import { saldoTotal } from "./saldoTotal.js";

function funcoesPadroes() {
  excluirTransacao();
  saldoTotal()
  bEditar()
}

document.addEventListener("DOMContentLoaded", async () => {
  const spanTransacoes = await fetch("http://localhost:3000/transacoes").then(
    (result) => result.json()
  );
  spanTransacoes.forEach(criarSpan);
  funcoesPadroes()
});

let formOP = document.getElementById("formOp");

let valorForm = document.getElementById("valorForm");
let nomeForm = document.getElementById("nomeForm");

if (formOP.dataset.metodo === "post") {
  formOP.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const op = {
      nome: nomeForm.value,
      valor: valorForm.value,
    };

    const response = await fetch("http://localhost:3000/transacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(op),
    });

    const dadosSalvos = await response.json();
    formOP.reset();
    criarSpan(dadosSalvos);
    bEditar()
    funcoesPadroes();
  });
}