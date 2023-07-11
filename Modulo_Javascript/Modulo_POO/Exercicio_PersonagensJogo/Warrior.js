import { Character } from "./Character";

export class Warrior extends Character {
    #defesaInicial


    constructor(nome, pontosDeVida, ataque, defesa, pontosEscudo, posicao = "ataque") {
        super(nome, pontosDeVida, ataque, defesa);
        this.pontosEscudo = pontosEscudo;
        this.posicao = posicao;
        this.#defesaInicial = defesa
    }

    atacar(personagemAlvo) {
        if (this.posicao = "ataque") {
            personagemAlvo.pontosDeVida -= (this.ataque - personagemAlvo.defesa)
            //ao inves de colocar a sentença do atacar poderia ter colocado: super.atacar(personagemAlvo), retorna o metodo declarado
        } else {
            console.log("Não é permitido atacar em posição de defesa!")
        }
    }

    mudarPosicao() {
        if (this.posicao = "ataque") {
            this.posicao == "defesa"
            this.defesa += this.pontosEscudo
        } else {
            this.posicao = "ataque"
            this.defesa = this.#defesaInicial
        }
    }
}