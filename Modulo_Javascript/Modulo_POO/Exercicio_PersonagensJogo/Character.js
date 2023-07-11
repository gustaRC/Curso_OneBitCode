export class Character {
    constructor(nome, pontosDeVida, ataque, defesa) {
        this.nome = nome
        this.pontosDeVida = pontosDeVida
        this.ataque = ataque
        this.defesa = defesa
    }

    atacar(personagemAlvo) {
        personagemAlvo.pontosDeVida -= (this.ataque - personagemAlvo.defesa)
    }
}