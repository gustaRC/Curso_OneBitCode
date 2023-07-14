export class Installment {
    constructor(valorParcela, numParcela, situacao, taxaJuros) {
        this.valorParcela = valorParcela;
        this.numParcela = numParcela;
        this.situacao = situacao;
        this.taxaJuros = taxaJuros;
    }

    validacaoParcela() {
        if (this.situacao === "quitado") {
            return console.log("Emprestimo já quitado")
        } else if (this.situacao === "pendente"){
            return ((this.taxaJuros / 100) * this.valorParcela) + this.valorParcela
        }
    }
}