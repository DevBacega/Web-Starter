//INSTALL:yarn add axios

import axios from 'axios';

class Api {
    static async pegaInfoUsuario(usuario) {
        try {
            const response = await axios.get(`https://api.github.com/users/${usuario}`);
            console.log(response);
        } catch (err) {
            console.warn('Erro na API');
        }
    }
}
Api.pegaInfoUsuario('devBacega');
Api.pegaInfoUsuario('z12312edxc');