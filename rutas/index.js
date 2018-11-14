const lista = [1, 2, 3];

module.exports = 
    [
        {
            method: 'GET',
            path: '/lista/{id}',
            handler: (req, h) => {
                return { data: lista[req.params.id]};
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
                lista.splice(req.params.index,1);
                return { data: lista };
            }
        }    
    ]


