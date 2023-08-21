export async function bEditar() {
    const bEditar = document.querySelectorAll(".editar")

    let valorForm = document.getElementById("valorForm")
    let nomeForm = document.getElementById("nomeForm")

    bEditar.forEach(async el => {
        el.addEventListener("click", async () => {
            formOpPut.dataset.metodo = 'put'
            
            const transacaoAtual = await fetch("http://localhost:3000/transacoes/" + el.dataset.num).then(
                (result) => result.json()
            );

            nomeForm.value = transacaoAtual.nome
            valorForm.value = transacaoAtual.valor
        })

        const formOpPut = document.getElementById("formOp");

        if (formOpPut.dataset.metodo = 'put') {
            await formOpPut.addEventListener("submit", async () => {
                const op = {
                    nome: document.querySelector("#nomeForm").value,
                    valor: document.querySelector("#valorForm").value,
                };
                
                await fetch(
                    "http://localhost:3000/transacoes/" + el.dataset.num,
                    {
                        method: "PUT",
                        headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify(op),
                    }
                );
    
                document.getElementById(`nomeTransacao-${el.dataset.num}`).textContent = op.nome
                document.getElementById(`valorTransacao-${el.dataset.num}`).textContent = op.valor
                formOpPut.dataset.metodo = 'post'
            })
        }
    })
}
