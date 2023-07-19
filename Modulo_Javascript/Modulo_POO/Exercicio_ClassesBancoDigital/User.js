import { Account } from "./Account"

export class User {
    constructor(email, nomeCompleto) {
        this.email = email
        this.nomeCompleto = nomeCompleto
        this.conta = new Account(this)
    }
}