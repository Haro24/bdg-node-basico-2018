let arreglo = [1, 2.3];
let obj = {
    att: 'hola', att2: 'hello'
}

console.log(`Resultado arreglo: ${arreglo}`);
console.log(obj);
console.log(`Resultado arreglo: ${JSON.stringify(obj)}`);


process.argv.forEach((value, index) => {
    console.log(`índice: ${index}, value: ${value}`);
});

for (let i = 0; i < process.argv.length; i++) {
    console.log(`índice: ${i}, value: ${process.argv[i]}`);
}

let funcion = (param1, param2) => param1 + param2;

console.log(`funcion; ${funcion(1, 2)}`); 

function otrafuncion(param3,param4) {
    return param3  * param4;
}

console.log(`funcion; ${otrafuncion(1, 2)}`); 


