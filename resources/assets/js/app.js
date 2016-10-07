//Funció constructora
// function Persona(){
//     console.log("Creant un objecte");
// }

var Persona = function (name) {
    this.name = name;
    console.log("Creant un objecte");
};

//Composició. Extendre una funció/Herencia

//Serveix per cambiar la funció original.
Persona.prototype.sayHello = function(){
    console.log('Hola '+ this.name);
};

console.log(Persona);

var personeta = new Persona('roger');

console.log(personeta.name);

console.log(personeta.sayHello());