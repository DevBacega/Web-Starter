//Install yarn add @babel/plugin-transform-asyn-to-generator -D
//Adicionar no .babelrc
//Install yarnd add @babel/polyfill -D
//Adicionar no webpack

const minhaPromise = () => new Promise((resolve,reject) => { 
setTimeout(() => { resolve('OK') }, 2000);
});


// minhaPromise()
//     .then(response => {
//       console.log(response);
//     })
//     .catch(err => {
//       console.log(err);
//     })

//AWAIT SÓ EXECUTA DENTRO DE UMA FUNÇÃO ASYNC
const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());

}

executaPromise();