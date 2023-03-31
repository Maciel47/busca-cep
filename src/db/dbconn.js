// Configurar acesso à BD.
const mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/buscacep/addresses';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));