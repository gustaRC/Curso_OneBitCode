const root = document.querySelector(":root")
const main = document.querySelector("main")

export default function () {
    //se o main estiver com o tema "dark" faça tal coisa
    if (main.dataset.theme === "dark") {
        //acessando e alterando os estilos do elemento root
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        //alterando nome do tema main para light
        main.dataset.theme = 'light'
    } else {
        //alterando o tema do main para dark
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = 'dark'
    }
}