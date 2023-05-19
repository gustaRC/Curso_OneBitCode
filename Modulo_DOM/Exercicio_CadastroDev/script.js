//Exercicio - Cadastro de Devs

//AUXILIO CRIAR INPUT
function newInput(id, value, name, type = 'text') {
    const input = document.createElement("input")
    //1- ID, 2- VALUE, 3- NAME, 4- TYPE
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    return input
}
//AUXILIO CRIAR LABEL
function newLabel(txt, elFor) {
    const label = document.createElement("label")
    //1- TEXTO DA LABEL, 2- FOR
    label.innerText = txt
    label.for = elFor
    return label
}

//DECLARAÇÃO FORM CRIADO NO HTML
const devForm = document.getElementById("devForm")
//DECLARAÇÃO BUTTON DE ADICIONAR TECNOLOGIA CRIADO NO HTML
const DevBtnAdd = document.getElementById("buttonAdd")
//DECLARAÇÃO CONTADOR
let rowNumber = 0

//EVENTO AO CLICAR NO BOTAO ADD TECNOLOGIA
DevBtnAdd.addEventListener("click", function() {
    //DECLARANDO VARIAVEL LISTA DO HTML
    const listTech = document.getElementById("listTec")

    //CRIANDO UMA NOVA LINHA DA LISTA
    let newRow = document.createElement("li")
    //ATRIBUINDO UM ID QUE SERÁ VARIAVEL CONFORME O CONTADOR, TORNANDO CADA LINHA IDENTIFICAVEL
    newRow.id = "rowN" + rowNumber
    //ATRIBUINDO UMA CLASSE GLOBAL PARA TDS AS LIs QUE SERÃO ADICIONADAS
    newRow.className = "rows"
    //ADD VARIAVEL CONTADORA
    rowNumber++

    //CRIANDO CAMPO NOME DA TECNOLOGIA
    const nameTechLabel = newLabel("Nome: ", "nameTech" + rowNumber)
    const nameTechInput = newInput("nameTech" + rowNumber, null, "nameTech")

    //CRIANDO TAG <br> DO HTML
    const br = document.createElement("br")

    //CRIANDO PARTE DO TEMPO DE EXPERIENCIA DA TECNOLOGIA
    const experience = newLabel("\nTempo de experiência: ")
    //0-2 ANOS
    const radioTechInput02 = newInput("radioTech" + rowNumber + ".02", "0-2 anos", "radioTech" + rowNumber, "radio")
    const radioTechLabel02 = newLabel("0-2 anos ", "radioTech" + rowNumber + ".02")

    //3-4 ANOS
    const radioTechInput34 = newInput("radioTech" + rowNumber + ".34", "3-4 anos", "radioTech" + rowNumber, "radio")
    const radioTechLabel34 = newLabel("3-4 anos ", "radioTech" + rowNumber + ".34")

    //+5 ANOS
    const radioTechInput5 = newInput("radioTech" + rowNumber + ".5", "+5 anos", "radioTech" + rowNumber, "radio")
    const radioTechLabel5 = newLabel("+5 anos ", "radioTech" + rowNumber + ".5")

    //CRIANDO BUTTON PARA DELETAR TECNOLOGIA
    const btnRemove = document.createElement("button")
    //TIPO DE BUTTON PQ SE NN SERÁ DO TIPO SUBMIT POR ESTAR DENTRO DE UMA FORM
    btnRemove.type = 'button'
    btnRemove.innerText = "Remover"
    //EVENTO AO CLICAR O BOTÃO DE REMOVER DA LISTA A LINHA REFERENCIADA
    btnRemove.addEventListener("click", function() {
        listTech.removeChild(newRow)
    })

    //ADICIONANDO A LINHA TODO O CONTEUDO DECLARADO
    newRow.append(
        nameTechLabel, nameTechInput, experience,
        radioTechInput02, radioTechLabel02, radioTechInput34, radioTechLabel34, radioTechInput5, radioTechLabel5,
        br, btnRemove
    )

    //ADICIONANDO A LINHA PARA A LISTA
    listTech.appendChild(newRow)
})

//DECLARANDO ARRAY PARA ARMAZENAR OS DADOS CADASTRADOS
let developers = []

//EVENTO AO SUBMETER O FORMULARIO
devForm.addEventListener("submit", function(ev) {
    //CODIGO PARA NÃO ACONTECER O COMPORTAMENTO PADRAO DE SUBMIT Q SERIA RECARREGAR A PÁGINA
    ev.preventDefault()

    //DECLARANDO O NOME COMPLETO DO DEV REFERENCIADO NO HTML
    const FullNameDev = document.getElementById("nameDev")
    //ARMAZENANDO TODAS AS LINHAS CRIADAS POR MEIO DA CLASSE "rows"
    const rows = document.querySelectorAll(".rows")

    //DECLARAÇÃO ARRAY PARA ARMAZENAR AS TECNOLOGIAS DO DEV
    let tech = []
    rows.forEach(function(line) {
        //VAI PASSAR POR CADA LINHA ARMAZENANDO O NOME E O TEMPO DE EXPERIENCIA DA TECNOLOGIA
        //E ADICIONANDO NA VARIAVEL ARMAZENADORA
        //RESULTADO DO QUERYSELECTOR: #rowId input[name="techName"]
        const nameTechRow = document.querySelector("#" + line.id + " input[name='nameTech']").value
        //RESULTADO DO QUERYSELECTOR: #rowId input[type='radio']:checked (PARA ARMAZENAR SOMENTE OS CAMPOS MARCADOS)
        const radioTechRow = document.querySelector("#" + line.id + " input[type='radio']:checked").value
        tech.push({ nome: nameTechRow, exp: radioTechRow })
    })

    //VARIAVEL MOLDADORA DO OBJETO DE ARMAZENAGEM DO NOME DO DESENVOLVEDOR E SUAS TECNOLOGIAS
    const newDev = {
        nomeDev: FullNameDev.value,
        techDev: tech
    }
    //ADICIONAR A VARIAVEL OBJETO AO ARRAY DEVELOPERS
    developers.push(newDev)
    //MENSAGEM DE CONFIRMAÇÃO DO CADASTRO
    alert("Desenvolvedor cadastrado com sucesso!")

    //MOSTAR NO CONSOLE OS DESENVOLVEDORES CADASTRADOS
    console.log(developers)

    //RESETAR CAMPO DE TEXTO E LISTA DE TECNOLOGIAS
    FullNameDev.value = ''
    rows.forEach(function (row) {
        row.remove()
    })
})
