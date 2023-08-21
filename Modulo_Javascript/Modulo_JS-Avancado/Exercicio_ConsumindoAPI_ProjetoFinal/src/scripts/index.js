import { bEditar } from "./bEditar.js";
import { excluirTransacao } from "./bExcluir.js";
import { criarSpan } from "./criarSpan.js";
import { saldoTotal } from "./saldoTotal.js";

function funcoesPadroes() {
  excluirTransacao();
  saldoTotal()
}


document.addEventListener("DOMContentLoaded", async () => {
  const spanTransacoes = await fetch("http://localhost:3000/transacoes").then(
    (result) => result.json()
  );
  spanTransacoes.forEach(criarSpan);
  funcoesPadroes()
  bEditar()
});

const formOP = document.getElementById("formOp");

if (formOP.dataset.metodo === "post") {
  formOP.addEventListener("submit", async (ev) => {
    ev.preventDefault();
  
    const op = {
      nome: document.querySelector("#nomeForm").value,
      valor: document.querySelector("#valorForm").value,
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
    funcoesPadroes();
    bEditar()
  });
}


