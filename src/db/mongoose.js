const mongoose = require('mongoose');

const url = process.env.PORT || 'mongodb://127.0.0.1:27017/Jornadas-Cientificas-I';

async function main() {
    try {
        await mongoose.connect(url);
    } catch (error) {
        console.log('Erro ao Conectar a Base de Dados');
    }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}   
 
main();