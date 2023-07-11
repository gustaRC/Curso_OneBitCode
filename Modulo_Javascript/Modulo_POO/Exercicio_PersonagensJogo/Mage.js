import { Character } from "./Character";

export class Mage extends Character {
    constructor(nome, pontosDeVida, ataque, defesa, pontosMagia) {
        super(nome, pontosDeVida, ataque, defesa)
        this.pontosMagia = pontosMagia
    }

    atacar(personagemAlvo) {
        personagemAlvo.pontosDeVida -= ((this.ataque - personagemAlvo.defesa) + this.pontosMagia)
    }

    curar(personagemAlvo) {
        personagemAlvo.pontosDeVida += (this.pontosMagia * 2)
    }
}