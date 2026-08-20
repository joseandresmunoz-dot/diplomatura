let distancia = 11000;

if (distancia < 1000) {
    console.log("Puedes ir caminando");
} else if (distancia < 10000) {
    console.log("Puedes ir en bicicleta");
}  else if (distancia < 30000) {
    console.log("Puedes ir en colectivo");
} else if (distancia < 100000) {
    console.log("Puedes ir en auto");
} else {
    console.log("Puedes ir en avion");
}
