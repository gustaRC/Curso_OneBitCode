export class Component {
    #elementDOM = null

    constructor(tag, parent, options) {
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }

    getElement() {
        return this.#elementDOM
    }

    build() {
        this.#elementDOM = document.createElement(this.tag)
        Object.assign(this.#elementDOM, this.options)
        return this
    }

    render() {
        if (this.parent instanceof Component) {
            this.parent.getElement().append(this.#elementDOM)
        } else {
            document.querySelector(this.parent).append(this.#elementDOM)
        }
    }
}