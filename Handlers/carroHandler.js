const Carro = require('../Models/Carro');

module.exports.agregarCarros =  (req, h) => {
    const carro = new Carro(req.payload.data);
    carro.save();

    return h.response(req.payload.data);
    
}