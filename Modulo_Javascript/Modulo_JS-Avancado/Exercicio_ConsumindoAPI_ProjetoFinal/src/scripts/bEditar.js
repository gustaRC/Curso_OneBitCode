import { excluirTransacao } from "./bExcluir.js";
import { saldoTotal } from "./saldoTotal.js";

export async function bEditar() {
    let btnEditar = document.querySelectorAll(".editar");

    let formOP = document.getElementById("formOp");
    
    btnEditar.forEach(el => {
      el.addEventListener("click", async ev => {
        const btn = event.target

        const dados = await fetch("http://localhost:3000/transacoes/" + btn.dataset.num).then(rs => rs.json())
        document.getElementById("valorForm").value = dados.valor
        document.getElementById("nomeForm").value = dados.nome

        formOP.dataset.metodo = "put"

        if (formOP === "put") {
          formOP.addEventListener("submit",async ev => {
            ev.preventDefault();

            const op = {
              id: btn.dataset.num,
              nome: document.getElementById("valorForm").value,
              valor: document.getElementById("nomeForm").value,
            };

            const response = await fetch("http://localhost:3000/transacoes/" + btn.dataset.num, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(op),
            });

            const dadosSalvos = await response.json();

            let nomeAlterado = document.getElementById(`nomeTransacao-${btn.dataset.num}`)
            nomeAlterado.textContent = dadosSalvos.nome
            let valorAlterado = document.getElementById(`valorTransacao-${btn.dataset.num}`)
            valorAlterado.textContent = dadosSalvos.valor

            formOP.reset();

            excluirTransacao();
            saldoTotal();

            formOP.dataset.metodo = "post";
          })
        }
      })
    })
}
