const numeros = [1, 123, 234, 563, 3578, 235435, 345, 2, 890]
let mayor = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}
console.log(`El número mayor de estos ${numeros} números es: ${mayor}`)