import { Character } from "./Character";

export class Thief extends Character {
    atacar(personagemAlvo) {
        personagemAlvo.pontosDeVida -= ((this.ataque - personagemAlvo.defesa) * 2)
    }
}