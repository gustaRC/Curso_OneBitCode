export async function bEditar() {
    let btnEditar = document.querySelectorAll(".editar");

    let valorForm = document.getElementById("valorForm");
    let nomeForm = document.getElementById("nomeForm");
    
    btnEditar.forEach(el => {
      console.log(el)
      el.addEventListener("click", async ev => {
        const dados = await fetch(`http://localhost:3000/transacoes/${ev.dataset.num}`).then(rs => rs.json())
        valorForm.value = dados.valor
        nomeForm.value = dados.nome
      })
    })
}
