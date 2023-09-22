let usersArray = [];
//GET USUARIO GITHUB
async function getGit(username) {
    let get = await fetch(`https://api.github.com/users/${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    let getJSON = await get.json();
    if (getJSON.id === undefined) {
        alert("USER NOT FOUND! 404");
        throw Error("USER NOT FOUND! ERROR 404");
    }
    else {
        let user = {
            id: getJSON.id,
            login: getJSON.login,
            name: getJSON.name,
            bio: getJSON.bio,
            public_repos: getJSON.public_repos,
            repos_url: getJSON.repos_url
        };
        usersArray.push(user);
    }
}
//EXIBIR DADOS E REPOSITORIOS DO USUARIO
async function showUser(username) {
    // let reposArray = []\
    let user = usersArray.find(user => user.login === username);
    let get = await fetch(user.repos_url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    let getJSON = await get.json();
    let txtRepositorios = '';
    getJSON.forEach(el => {
        let elRepos = {
            id: el.id,
            description: el.description,
            fork: el.fork,
            stargazers_count: el.stargazers_count
        };
        // reposArray.push(elRepos)
        txtRepositorios += `
      ID: ${elRepos.id},
      DESCRIPTION: ${elRepos.description},
      FORK: ${elRepos.fork ? "YES" : "NO"},
      STARGAZERS COUNT: ${elRepos.stargazers_count}.
      ---`;
    });
    alert(` -- USER DATA -- 
  - ID: ${user.id},
  - LOGIN: ${user.login},
  - NAME: ${user.name},
  - BIO: "${user.bio}",
  - NUMBER OF PUBLIC REPOSITORIES: ${user.public_repos},
  - REPOSITORIES: ${txtRepositorios}
  `);
}
//MOSTRAR USUARIOS SALVOS
function showUsers() {
    let txtUsers = '';
    usersArray.forEach(el => {
        txtUsers += `- ID: ${el.id},
    - LOGIN: ${el.login},
    - NAME: ${el.name},
    - BIO: "${el.bio}",
    - NUMBER OF PUBLIC REPOSITORIES: ${el.public_repos},
    - PUBLIC REPOSITORIES: ${el.public_repos},
    - REPOSITORIES URL: ${el.repos_url}
    ---
    `;
    });
    alert(`-- USERS DATA --
  ${txtUsers}`);
}
//SOMA DE REPOSITORIOS
function showSumRepositories() {
    let result = usersArray.reduce((acc, cT) => acc + cT.public_repos, 0);
    alert(`NUMBER OF USERS EXISTING REPOSITORIES: ${result}`);
}
//TOP 5 USUARIOS COM MAIOR NÚMERO DE REPOSITORIOS
function rankingUsers() {
    let ranking = usersArray.sort((el1, el2) => el2.public_repos - el1.public_repos).slice(0, 5);
    alert(`-- TOP 5 USERS WHO HAVE THE MOST REPOSITORIES --
    1º - ${ranking[0] ? `${ranking[0].name}, LOGIN: ${ranking[0].login} | Nº REPOSITORIES: ${ranking[0].public_repos};` : `NOT EXIST;`}
    2º - ${ranking[1] ? `${ranking[1].name}, LOGIN: ${ranking[1].login} | Nº REPOSITORIES: ${ranking[1].public_repos};` : `NOT EXIST;`}
    3º - ${ranking[2] ? `${ranking[2].name}, LOGIN: ${ranking[2].login} | Nº REPOSITORIES: ${ranking[2].public_repos};` : `NOT EXIST;`}
    4º - ${ranking[3] ? `${ranking[3].name}, LOGIN: ${ranking[3].login} | Nº REPOSITORIES: ${ranking[3].public_repos};` : `NOT EXIST;`}
    5º - ${ranking[4] ? `${ranking[4].name}, LOGIN: ${ranking[4].login} | Nº REPOSITORIES: ${ranking[4].public_repos}.` : `NOT EXIST.`}`);
}
