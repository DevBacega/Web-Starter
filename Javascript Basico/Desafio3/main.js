function ChecarIdade(idade) {
    return new Promise(function (resolve, reject) {

        if (idade >= 18) {
            setTimeout(function () { resolve('A idade é maior que 18!'); }, 2000)
        } else {
            setTimeout(function () { reject('A idade é a baixo de 18'); }, 2000);
        }
    })
}

ChecarIdade(15)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    })

var inputElement = document.getElementById('nome');
var buttonElement = document.getElementById('button');
var divElement = document.getElementById('rep');
var buttonLimpar = document.getElementById('limpar');
var ULElement = document.getElementById('lista');

function getRepos(nome) {
    return new Promise(function (sucesso, erro) {
        Carregando();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + nome + '/repos');
        xhr.send(null);

        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    sucesso(JSON.parse(xhr.responseText));
                } else {
                    erro('Error na requisição');
                }
            }
        }
    });
}


function criarLista(repositorio) {

    var Carregando = document.getElementById("Carregando");
    Carregando.parentNode.removeChild(Carregando);

    for (unidade of repositorio) {
        var LIElement = document.createElement('li');
        var LIText = document.createTextNode(unidade.name);
        LIElement.appendChild(LIText);
        ULElement.appendChild(LIElement);
    }
}

function Carregando() {
    var LIElement = document.createElement('p');
    LIElement.setAttribute('Id', 'Carregando');
    var LIText = document.createTextNode("Carregando...");
    LIElement.appendChild(LIText)
    ULElement.appendChild(LIElement);
}

buttonElement.onclick = function () {
    getRepos(inputElement.value)
        .then(function (response) {
            //console.log(response);
            criarLista(response);
        })
        .catch(function (error) {
            var Carregando = document.getElementById("Carregando");
            Carregando.parentNode.removeChild(Carregando);
            var LIElement = document.createElement('li');
            var LIText = document.createTextNode('Usuario não Encontrado.');
            LIElement.appendChild(LIText);
            ULElement.appendChild(LIElement);
        });
}

buttonLimpar.onclick = function () {

    while (ULElement.firstChild) {
        ULElement.removeChild(ULElement.lastChild);
    }
}

