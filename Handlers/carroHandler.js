const Carro = require('../Models/Carro');

/**
 * 
 */
module.exports.ListarCarrosAsync = async (req, h) => {
    try {


        const { preTokenVal } = req.pre;
        if (preTokenVal == -1) {
            return h.response({ error: preTokenVal });
        }
        if (!req.query.id) {
            return await Carro.find();
        }
        return await Carro.findById({ _id: req.query.id, color: req.query.color });
    }
    catch (error) {
        return h.response(error);
    }
}


module.exports.BuscarCarrosAsync = async (req, h) => {
    try {
        const { preTokenVal } = req.pre;
        if (preTokenVal == -1) {
            return h.response({ error: preTokenVal });
        }
        let Carro = await Carro.findById({ _id: req.params.id })
        return h.response(Carro);
    }
    catch (error) {
        return h.response(error);
    }
}

module.exports.ActualizarCarrosAsyncAwait = async (req, h) => {
    try {
        const { preTokenVal } = req.pre;
        if (preTokenVal == -1) {
            return h.response({ error: preTokenVal });
        }
        const carroActualizado = await Carro.findByIdAndUpdate(req.query.id, req.payload.data);
        return h.response(carroActualizado);
        //return await Carro.findOneAndUpdate({ _id: req.query.id}, req.payload.data);


    }
    catch (error) {
        return h.response(error);
    }
}

module.exports.EliminarCarrosAsyncAwait = async (req, h) => {
    try {
        const { preTokenVal } = req.pre;
        if (preTokenVal == -1) {
            return h.response({ error: preTokenVal});
        }
        const carroEliminado = await Carro.findByIdAndDelete(req.query.id);
        return h.response(carroEliminado);
        //return await Carro.findOneAndUpdate({ _id: req.query.id}, req.payload.data);


    }
    catch (error) {
        return h.response(error);
    }
}


module.exports.agregarCarrosPromise = (req, h) => {
    return Carro.create(req.payload.data)
        .then(res => Carro.update({ _id: res._id }, documento))
        .then(res2 => h.response(res2))
        .catch(err => h.response(err));
}

module.exports.agregarCarrosAsyncAwait = async (req, h) => {
    try {
        const { preTokenVal } = req.pre;
        if (preTokenVal == -1) {
            return h.response({ error: preTokenVal });
        }
        const carroAgregado = await Carro.create(req.payload.data);
        console.log('Asybc/Wait', carroAgregado);
        console.log(await fAsync());
        /*
        fAsync()
        .then(res => {console.log(res)}) 
        .catch(err => {console.log(err)}) 
        */
        return h.response(carroAgregado);

    }
    catch (error) {
        return h.response(error);
    }

}

const fAsync = async () => {
    return 'hola mundo';
}





module.exports.agregarCarroCB = (req, h) => {
    const carro = new Carro(req.payload.data);

    return new Promise((resolve, reject) => {
        //CB de Save----------
        carro.save((err, carro) => {
            if (err) {
                return reject(err);

            }
            return resolve(carro);
        });
        //------------------------
    });

    /*
carro.save((err, carro) => {
    if(err) {
        return err;

    }
    console.log(carro);
    return carro;
});
return h.response(req.payload.data);*/

}

