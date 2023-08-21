export async function saldoTotal() {
    let saldoTotal = document.getElementById("saldoTotal")

    let valoresTransacoes = []

    const transacoesBack = await fetch("http://localhost:3000/transacoes").then(
        (result) => result.json()
    );

    transacoesBack.forEach(el => {
        valoresTransacoes.push(parseFloat(el.valor))
    });
    
    const saldo = valoresTransacoes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    saldoTotal.textContent = saldo
}