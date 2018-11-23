module.exports.preValidar = (request) => {
    //va buscar en request automaticamente .headers lo que se le envia
    const { headers } = request;

    if (headers.token) {
        return 1;
    }
    return -1;
}