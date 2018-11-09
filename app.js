const modulow = require('./miPrimerModulo');
const circulo = require('./Geometria/circulo');
const geometria = require('./Geometria');
console.log('-- modulo simple --');
console.log(modulow.restaNumeros(1, 4));
console.log(modulow.sumaNumeros(1, 4))
console.log('-- uso de index --');
console.log(circulo.area(4));
console.log(geometria.area.areaCirculo(3), geometria.perimetro.perimetroCirculo(4));
