export class Component {
    #ElementDOM

    constructor(DOM, typeDOM) {
        this.#ElementDOM = DOM
        this.buildThis = this.build(typeDOM)
    }

    valueDOM() {
        console.log(this.#ElementDOM)
    }

    build(typeDOM) {
        document.createElement(typeDOM)
    }

    render(x) {
        document.body.appendChild(x)
    }
}