let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
}

console.log(pedro.edad)

pedro.estatura = 1.8;

delete pedro.activo;

for (let [llave, valor] of Object.entries(pedro)) {
    console.log(llave + ' : ' + valor);
}

pedro.saluda = function(){
    console.log("Hola, me llamo " + this.nombre);
}

pedro.saluda();