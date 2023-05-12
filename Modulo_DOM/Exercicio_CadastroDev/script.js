//Exercicio - Cadastro de Devs

let listTec = document.getElementById("listTec")

const buttonAdd = document.getElementById("buttonAdd")

let num = 0



buttonAdd.addEventListener("click", function() {
    //CAMPO TEXT - NOVA TECNOLOGIA
    const labelTxtTec = document.createElement("label")
    labelTxtTec.innerText="Nome da Tecnologia "
    labelTxtTec.for="txtTec"

    const txtTec = document.createElement('input')
    txtTec.type = 'text'
    txtTec.id = 'txtTec'

    //paragrafo informativo
    let span = document.createElement('span')
    span.innerText = "\nTempo de Experiência: "

    //CAMPO RADIO - OPÇÕES
    //0-2 ANOS
    const option02 = document.createElement('input')
    option02.type = 'radio'
    option02.id = 'option02'
    option02.name = 'Time' + num
    option02.value = '0-2 anos'

    const labelOption02 = document.createElement("label")
    labelOption02.innerText="0-2 anos"
    labelOption02.for="option02"

    //3-4 ANOS
    const option34 = document.createElement('input')
    option34.type = 'radio'
    option34.id = 'option34'
    option34.name = 'Time' + num
    option34.value = '3-4 anos'

    const labelOption34 = document.createElement("label")
    labelOption34.innerText="3-4 anos"
    labelOption34.for="option34"

    //+5 ANOS
    const option5 = document.createElement('input')
    option5.type = 'radio'
    option5.id = 'option5'
    option5.name = 'Time' + num
    option5.value = '+5 anos'

    const labelOption5 = document.createElement("label")
    labelOption5.innerText="+5 anos"
    labelOption5.for="option5"

    //BOTAO EXCLUIR LINHA
    var buttonDelete = document.createElement("button")
    buttonDelete.innerText = "Deletar Tecnologia"
    buttonDelete.id = "buttonDelete"
    buttonDelete.name = "bD" +  num

    //CRIANDO LI
    let lineTec = document.createElement("li")

    //ATRIBUINDO INPUTS/LABELS PARA O LI
    lineTec.append(labelTxtTec, txtTec, document.createElement("br"), span,
    option02, labelOption02, option34, labelOption34, option5 ,labelOption5, document.createElement("br"), document.createElement("br"),
    buttonDelete, document.createElement("br"), document.createElement("br"), document.createElement("br"))
    lineTec.id = "line" + num

    //ATRIBUINDO O LI PARA A UL
    listTec.appendChild(lineTec)
    //INCREMENTO NUM
    num++

    let delButton = document.querySelectorAll("#buttonDelete")

    delButton.forEach(element => {
        element.addEventListener("click", function(ev) {
            console.log(ev.currentTarget)
        })
    });

    console.log(delButton)
})

