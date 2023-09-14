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
        alert(`Situação alterada com sucesso! De "${planeta.situacao}" para "${situacao}"`);
        planeta.situacao = situacao;
    }
}
