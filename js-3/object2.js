let persona = {
    nombre: "Yaneth",
    edad: 43,
    ciudad: "Bogotá",
    profesión: "Analista de sistemas"
}

console.log(persona);

function presentacion() {
    console.log(persona.nombre + ", "+ persona.edad + ", " + persona.ciudad);
}

var mensaje = presentacion(persona);

console.log("mensaje")

