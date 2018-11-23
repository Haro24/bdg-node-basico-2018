const Handlers = require('../Handlers');
const lista = [1, 2, 3];


module.exports =
    [
        {
            method: 'DELETE',
            path: '/carro',
            config: {
                pre: [
                    { method: Handlers.preHandler.preValidar, assign: 'preTokenVal' }
                ]
            },
            handler: Handlers.carroHandler.EliminarCarrosAsyncAwait
        },
        {
            method: 'PUT',
            path: '/carro',
            config: {
                pre: [
                    { method: Handlers.preHandler.preValidar, assign: 'preTokenVal' }
                ]
            },
            handler: Handlers.carroHandler.ActualizarCarrosAsyncAwait
        },
        {
            method: 'GET',
            path: '/carro',
            config: {
                pre: [
                    { method: Handlers.preHandler.preValidar, assign: 'preTokenVal' }
                ]
            },
            handler: Handlers.carroHandler.ListarCarrosAsync
        },
        {
            method: 'POST',
            path: '/carro',
            config: {
                pre: [
                    { method: Handlers.preHandler.preValidar, assign: 'preTokenVal' }
                ]
            },
            handler: Handlers.carroHandler.agregarCarrosAsyncAwait
        },
        {
            method: 'GET',
            path: '/lista/{id}',
            config: {
                pre: [
                    { method: Handlers.preHandler.preValidar, assign: 'preTokenVal' }
                ]
            },
            handler: (req, h) => {
                return { data: lista[req.params.id] };
            }
        },
        {
            method: 'GET',
            path: '/lista',
            handler: (req, h) => {
                return { data: lista };
            }
        },
        {
            method: 'POST',
            path: '/lista',
            handler: (req, h) => {
                console.log(req.payload.data);
                lista.push(req.payload.data);
                return { data: lista };
            }
        },
        {
            method: 'PUT',
            path: '/lista/{index}',
            handler: (req, h) => {
                lista[req.params.index] = req.payload.data;
                return { data: lista };
            }
        },
        {
            method: 'DELETE',
            path: '/lista/{index}',
            handler: (req, h) => {
                lista.splice(req.params.index, 1);
                return { data: lista };
            }
        }
    ]


