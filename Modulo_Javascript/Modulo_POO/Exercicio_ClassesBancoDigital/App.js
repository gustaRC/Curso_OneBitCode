import { Deposit } from "./Deposit"
import { Loan } from "./Loan"
import { Transfer } from "./Transfer"
import { User } from "./User"

export class App {
    static #usuarios = []

    static encontrarUsuario(email) {
        const usuario = this.#users.find(user => user.email === email)
        return usuario ?? null
    }

    static criarUsuario(email, nomeCompleto) {
        const usuarioExistente = App.encontrarUsuario(email)
        if (!usuarioExistente) {
            this.#usuarios.push(new User(email, nomeCompleto))
        }
    }

    static deposito(email, valor) {
        const usuario = App.encontrarUsuario(email)
        if (usuario) {
            const novoDeposito = new Deposit(valor)
            user.conta.addDeposito(novoDeposito)
        }
    }

    static transferencia(qmEnviouEmail, qmRecebeuEmail, valor) {
        const qmEnviou = App.encontrarUsuario(qmEnviouEmail)
        const qmRecebeu = App.encontrarUsuario(qmRecebeuEmail)
        if (qmEnviou && qmRecebeu) {
            const novaTransferencia = new Transfer(qmEnviou, qmRecebeu, valor)
            qmEnviou.conta.addTransferencia(novaTransferencia)
            qmRecebeu.conta.addTransferencia(novaTransferencia)
        }
    }
    
    static emprestimos(email, valor, numEmprestimos) {
        const usuario = App.encontrarUsuario(email)
        if(usuario) {
            const novoEmprestimo = new Loan(valor, numEmprestimos)
            usuario.conta.addEmprestimo(novoEmprestimo)
        } 
    }

    static mudarTaxaJuros(novaTaxa) {
        Loan.taxaJuros = novaTaxa
    }
}