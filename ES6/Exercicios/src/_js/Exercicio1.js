/*
    //EXERCICIO: 1
    class Usuario {
        constructor(nome, email) {
            this.nome = nome;
            this.email = email;
            // this.admin = false;
        }

        isAdmin(admin) {
            return this.admin === true ? `E ADM` : `NUM É ADM`;
        }
    };

    class Admin extends Usuario {
        constructor(nome, email) {
            super(nome, email);
            this.admin = true;
        }
    }
    const user = new Usuario('Victor', 'email@email.com');
    const admin = new Admin('Thais', 'email@email.com');

    console.log(user, user.isAdmin());
    console.log(admin, admin.isAdmin());
*/

//EXERCICIO 2

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   //2.1 - map

   const idade = usuarios.map((item,index) => item.idade);

   console.log(idade);

   //2.2

   const trabalho = usuarios.filter(item => item.empresa ==='Rocketseat' && item.idade >=18);
   console.log(trabalho);

   //2.3

   const google = usuarios.find(item => item.empresa === 'Google');
   console.log(google);

   //2.4

   const multiplica = usuarios.filter((item) => {
       item.idade *= 2; return item.idade <= 50;
   })

   console.log(multiplica);

   //EXERCICIO 3

   // 3.1
    const arr = [1, 2, 3, 4, 5];
    // arr.map(function(item) {
    // return item + 10;
    // });

    arr.map((item,index) => item +10);

    console.log(arr);

    // 3.2
    // Dica: Utilize uma constante pra function
    const usuario = { nome: 'Diego', idade: 23 };
    const mostraIdade = (usuario => usuario.idade);
    
   console.log(mostraIdade(usuario));

    // 3.3
    // Dica: Utilize uma constante pra function
    const nome = "Diego";
    const idades = 23;
    const mostraUsuario = (nome = 'Diego', pamonha = 18) => ({nome,pamonha});
    console.log(mostraUsuario(nome,idades));
    console.log(mostraUsuario(nome));

    // 3.4
    const promise = async () => await new Promise((resolve, reject) =>{
        setInterval(() => {
            resolve(console.log('Passou'));
        },2000)
        reject(console.log('numpasso'))
        
    } );

  // console.log(promise());

   //EXERCICIO 4

   //4.1

   const empresa = {
    name: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };
    const {name,endereco:{cidade,estado}} = empresa;
    
    console.log(nome,cidade,estado);

    //4.2
    const mostrarInfo = ({nome,idade}) => `Meu nome é ${nome} e eu tenho ${idade} anos.`

    console.log(mostrarInfo(usuario));


    //EXERCICIO 5

    //5.1

    const [a,...b] = arr;

    console.log(a);
    console.log(b);

    //5.2

    const soma = (...inteiros) => inteiros.reduce((total,next) => total+next)

    console.log(soma(1,3,5,10));

    //EXERCICIO 6

    const usuario6 = 'Diego';
    const idade6 = 23;
    console.log(`O usuario ${usuario6} tem ${idade6} anos.`);

    //EXERCICIO 7

    const nome7 = 'Diego';
    const idade7 = 23;
    const usuario7 = {
        nome7,
        idade7,
        cidade: 'Rio do Sul',
    };
    console.log(usuario7);