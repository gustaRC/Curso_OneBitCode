import { Installment } from "./Installment";

//EMPRESTIMO
export class Loan {
    static #taxaJuros = 1.05

    constructor(valor, parcelas) {
        this.valor = valor;
        this.parcelas = []
        for(let i = 1; i <= parcelas; i++) {
            this.parcelas.push(new Installment((value * Loan.#taxaJuros) / parcelas, i))
        }
        this.dataCriacao = new Date();
    }

    static get taxaJuros() {
        return Loan.#taxaJuros
    }

    static set taxaJuros(novaTaxa) {
        Loan.#taxaJuros = 1 + (novaTaxa / 100)
    }    
}