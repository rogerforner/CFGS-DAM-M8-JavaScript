console.log('Hello friday!');

//En JS this no sempre és el mateix, depèn del context.
//Sempre fa referència a un objecte.
//No és el mateix que en Java o PHP: la pròpia classe.


//"use strict";

console.log(this); //this= Window o Global a node

//this a javascript: objecte que invoca la funció on s'utilitza this

var person = {
  firstName : "Penelope",
    lastName : "Barrymore",
    showFullName:function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

person.showFullName()