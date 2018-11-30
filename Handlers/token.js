var jwt = require('jsonwebtoken');

const expiresIn= '5d';
/**
 * Funcion de generación de token, recibe como parametro payload
 */

module.exports.TokenSign =  (payload) => {
    try{
        let token = jwt.sign(payload, process.env.SECUREJWT, {expiresIn});

        return {token};
    } catch(error){
        return error;
    }





}


