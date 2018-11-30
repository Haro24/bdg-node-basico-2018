require('dotenv').config();
const Hapi = require('hapi');
const rutas = require('./rutas');
const db = require('./Config/database').db;


const server = Hapi.Server({
    host: 'localhost',
    port: 3000
});

server.ext('onPreResponse',(req,h)=>{
    if(req.response != null && req.response.header != null){
        req.response.header('Access-Control-Allow-Origin','*');
        req.response.header('Access-Control-Allow-Headers','Content-Type,token');
        req.response.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    }
    return h.continue;
});
server.route(rutas);

async function start() {
    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);

    }
    console.log('Server running at:', server.info.uri);

}

start();