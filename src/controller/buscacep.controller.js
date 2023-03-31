var Address = require('../model/buscacep.model');
exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};

//Adicionar smartphone à BD
exports.create = function (req, res) {
    let address = new Address(
     {
        cep: req.body.cep,
        logradouro: req.body.logradouro,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        localidade: req.body.localidade,
        uf: req.body.uf,
        ibge: req.body.ibge, 
        gia: req.body.gia,
        ddd: req.body.ddd,
        siafi: req.body.siafi
     }
     );
     address.save(function (err) {
    if (err) {
    return next(err);
     }
     res.send('CEP registrado com sucesso')
     })
    };