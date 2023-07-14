import { Installment } from "./Installment";

//EMPRESTIMO
export class Loan {
    static #taxaJuros = 0

    constructor(valor, dataCriacao, qtdeParcelas) {
        this.valor = valor;
        this.dataCriacao = dataCriacao;
        this.parcelas = new Installment(valor, qtdeParcelas);
    }

    static get getTaxaJuros() {
        return this.#taxaJuros
    }

    static set setTaxaJuros(taxaJuros) {
        this.#taxaJuros = taxaJuros
    }

    
}