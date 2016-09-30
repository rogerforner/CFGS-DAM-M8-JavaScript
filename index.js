// OOP: Object Oriented Programming

//JSON

// var Person = {
//
// };
//
// Person.name="Sergi";
//
// Person.hello = function() {
//
// };

//OLN

var Person = {
    name : "Sergi",
    constructor: function(){

    },
    hello: function () {
        console.log('Hola ' + this.name);
    },
    bye :function(){
        return 'Bye bye ' + this.name;
    }
}; //No és una classe. És un objecte directament!!

Person.hello();
console.log(Person.bye());