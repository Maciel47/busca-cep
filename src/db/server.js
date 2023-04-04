const express = require('express');
const bodyParser = require('body-parser');
// inicializar app express

const buscacep = require('../routes/buscacep.route'); // Importa rota
const app = express();
app.use('/buscacep', buscacep);

// //Acesso à BD
// const mongoose = require('mongoose');
// let url = 'mongodb://localhost:27017/buscacep/addresses';
// let mongoDB = process.env.MONGODB_URI || url;
// mongoose.connect(mongoDB,{useNewUrlParser: true });
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

// //Body Parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use('/', buscacep);

let port = 8000;
app.listen(port, () => {
    console.log('Servidor em execução: localhost:' + port);
});
