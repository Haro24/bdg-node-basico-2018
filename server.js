const Hapi = require('hapi');
const rutas = require('./rutas');
const server = Hapi.Server({
    host: 'localhost',
    port: 3000
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