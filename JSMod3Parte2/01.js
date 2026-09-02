// Ejercicio 1
function CalculoPromedio(nota1, nota2) {
    const promedio = (nota1 + nota2) / 2;
    return promedio;
}
const NotaPrimerSemestre = 9;
const NotaSegundoSemestre = 8;
//console.log(NotaPrimerSemestre, NotaSegundoSemestre);
const CalcularPromedio = CalculoPromedio(NotaPrimerSemestre, NotaSegundoSemestre);
console.log("El promedio de las notas es: " + CalcularPromedio);