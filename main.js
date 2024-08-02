// console.log("Hola Mundo! desde la cosola");
var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('<h2>Estudiante de Contador Público | Desarrolladora Fronted Jr.</h2>')
    .pauseFor(2500)
    .deleteAll()
        .start();