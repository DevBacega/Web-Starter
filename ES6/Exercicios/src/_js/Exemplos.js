/*
OPERAÇÕES EM ARRAY
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);

//Percorre o array, consigo resgatar o index e o valor do index.
const newArr = arr.map(function (item, index) {
    return item + index;
});

console.log(newArr);

//Percorre o array, icrementa o valor atual com o proximo.
const sum = arr.reduce(function(total, proximo){
    return total + proximo;
});

console.log(sum);

//Aplica um filtro e me retorna todos os valores que se encaixa no filtro.
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

//Faz uma busca dentro do array
const find = arr.find(function(item){
    return item === 2
})

console.log(find);

*/
///////////////////////////////////////////////////////////
/*
ARROWS FUNCTIONS
//Sem Arrow Function
    const arr = [1,2,3,4,5];

    // const newArr = arr.map(function(item){
    //     return item * 2;
    // })

    // console.log(newArr);


//Sem a keyword Function
    // const newArr = arr.map((item) => {
    //     return item * 2;
    // })

    // console.log(newArr);

//Quando usa apenas um parametro
    // const newArr = arr.map(item => {
    //     return item * 2;
    // })

    // console.log(newArr);

//Quando apenas tem um Return
    // const newArr = arr.map(item => item * 2);
    
    // console.log(newArr);

//Const como funções
    const teste = () => ({nome: 'Diego'})

    console.log(teste());
*/
///////////////////////////////////////////////////////////////////
/*
VALORES PADRÃO

//Coloca-se um valor padrão para os parametros para caso seja preenchido ao 
se chamar a função, o padrão valor é usado
function soma(a = 3, b = 6){
    return a + b;
}

console.log(soma(1));
console.log(soma());

const somaArrow = (a =3, b = 6) => a + b;

console.log(somaArrow(1));
console.log(somaArrow());
*/
///////////////////////////////////////////////////
/*
DESESTRUTURAÇÃO

const usuario = {
    nome: 'Victor',
    idade: 25,
    endereco: {
        cidade: 'Piracicaba',
        estado: 'SP',
    },
};

const { nome, idade, endereco:{cidade}} = usuario;

console.log(nome); console.log(idade); console.log(cidade);

function mostrarUsuario({nome, idade}){
    console.log(nome,idade);
}

mostrarUsuario(usuario);
*/
/*
    //REST E SPREAD

    //INSTALL: yarn add @babel/plugin-proposal-object-rest-spread

    //REST
    const usuario = {
        nome: 'Victor',
        idade: 25,
        empresa: 'Smartbreeder'
    };

    const { nome, ...resto} = usuario;

    console.log(nome);
    console.log(resto);

    const arr = [1,2,3,4];

    const [a,b, ...c] = arr;
    console.log(a);
    console.log(b);
    console.log(c);

    function soma (c,b, ...a){
        return c + b + a.reduce((total, next) => total + next);
    }
    console.log(soma(1,3,56,8));

    //SPREAD

    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const arr3 = [...arr1, ...arr2];

    console.log(arr3);

    const usuario2 = { ...usuario, nome: 'Thais'};

    console.log(usuario2);
*/

/*
    //TEMPLATE LITERALS

    const nome = 'Victor';
    const idade = '25';

    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
*/
/*
    //OBJECT SHORT SYNTAX

    const nome = 'Victor';
    const idade = 25;

    const usuario = {
        nome,
        idade,
        empresa: 'Smartbreeder'
    }

    console.log(usuario);
*/
