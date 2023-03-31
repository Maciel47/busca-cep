const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AddressSchema = new Schema({
    cep: {type: String, required: true, max: 9},
    logradouro: {type: String, required: false},
    complemento: {type: String, required: false},
    bairro: {type: String, required: false},
    localidade: {type: String, required: true},
    uf: {type: String, required: true, max: 2},
    ibge: {type: Number, required: false},
    gia: {type: Number, required: false},
    ddd: {type: Number, required: true, max: 2},
    siafi: {type: Number, required: false}
});
// Exportar o modelo
module.exports = mongoose.model('Address', AddressSchema);

