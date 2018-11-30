var jwt = require('jsonwebtoken');


module.exports.preValidar = (request) => {
    //va buscar en request automaticamente .headers lo que se le envia

    try {

        const { headers } = request;
        let decoded = jwt.verify(headers.token, process.env.SECUREJWT);        
        console.log({ decoded });
        if (decoded) {
            return 1;

        }
        return 'Token incorrecto';

    } catch (err) {
        console.log(err.message);
        return -1;
    }



}

