//ARRAY GLOBAL PLANESTAS CADASTRADOS
let arrayPlanetas = [];
//CRIAR PLANETA
function novoPlaneta(nome, coordenadas, situacao, satelites) {
    let planeta = {
        nome,
        coordenadas,
        situacao,
        satelites
    };
    let txtSatelites = "";
    satelites.forEach(s => {
        txtSatelites += ` ${s},`;
    });
    let nomePlanetas = [];
    arrayPlanetas.forEach(el => nomePlanetas.push(el.nome));
    if (nomePlanetas.find(n => n === planeta.nome)) {
        alert(`Não foi possivel cadastrar o planeta! Nome ja existente.`);
    }
    else {
        alert(`${nome} foi cadastrado com sucesso!
    Coordenadas: ${coordenadas[0]}, ${coordenadas[1]}, ${coordenadas[2]}, ${coordenadas[3]};
    Situação: ${situacao};
    Satelites: ${txtSatelites}`);
        arrayPlanetas.push(planeta);
    }
}
//ENCONTRAR PLANETA PELO NOME
function encontrarPlaneta(nomePlaneta) {
    let planeta;
    planeta = arrayPlanetas.find(el => el.nome === nomePlaneta);
    return planeta;
}
//ALTERAR SITUAÇÃO DO PLANETA
function alterarSituacao(situacao, planeta) {
    if (situacao === planeta.situacao) {
        alert(`Está situação (${situacao}) já está definida! Selecione outra!`);
    }
    else {
        alert(`Situação do planeta ${planeta.nome} alterada com sucesso! De "${planeta.situacao}" para "${situacao}"`);
        planeta.situacao = situacao;
    }
}
//ADICIONAR SATELITE
function addSatelite(nomeSatelite, planeta) {
    planeta.satelites.push(nomeSatelite);
    alert(`Foi adicionado o satelite ${nomeSatelite} ao planeta ${planeta.nome}`);
}
//REMOVER SATELITE
function removeSatelite(nomeSatelite, planeta) {
    let index = planeta.satelites.indexOf(nomeSatelite);
    if (index > -1) {
        alert(`Foi removido o satelite ${nomeSatelite} do planeta ${planeta.nome}`);
        planeta.satelites.slice(index, 1);
    }
    else {
        alert(`Satelite ${nomeSatelite} não encontrado no planeta ${planeta.nome}`);
    }
}
//LISTA TDS OS PLANETAS CADASTRADOS
function listarPlanetas() {
    let txtPlanetas = '';
    arrayPlanetas.forEach(el => {
        let txtSatelites = "";
        el.satelites.forEach(s => {
            txtSatelites += ` - ${s}`;
        });
        txtPlanetas += `
    Nome: ${el.nome}
    Coordenadas: ${el.coordenadas[0]}, ${el.coordenadas[1]}, ${el.coordenadas[2]}, ${el.coordenadas[3]};
    Situação: ${el.situacao};
    Satelites: ${txtSatelites}.
    ---------------------------
    `;
    });
    alert(`Planetas cadastrados:
  ${txtPlanetas}
  `);
}
