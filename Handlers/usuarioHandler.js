const Usuario = require('../Models/Usuario');
const Token = require('./token');

module.exports.addUsuario = async (req, h) => {
    try {
        const usuarioAgregado = await Usuario.create(req.payload.data);
        return h.response(usuarioAgregado);
    }
    catch (error) {
        return h.response(error);
    }

}

module.exports.login = async (req, h) => {
    try {
        const usuario = await Usuario.findOne({
            user:req.payload.data.user,
            password:req.payload.data.password
        });

        
        if(usuario == null){
            return {
                error: 'Credenciales son incorrectas'
            }

        }
        const newtoken =  Token.TokenSign({user: req.payload.data.user});
        if(newtoken.token){
            return {
                data: newtoken.token
            }
    
        }
        else{
            return {
                error: newtoken
            }

        }


        //return usuario;

        //return h.response(usuario);
    }
    catch (error) {
        return h.response(error);
    }

}