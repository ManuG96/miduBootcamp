//JS Lenguaje de la Web - tipado debil y dinamico.

console.log("Hola Mundo!");

let firstName = "Miguel"; //"Permitir" - puede ser reasignada - scope del entorno.
const lastName = 4; //No se puede reasignar, se puede cambiar en metodos - scope global o local.
var isDeveloper = true;

//Strings inmutables, puedo crear nuevos en nuevas variables.


//Array
const list = [];
//agregando un item al array
list.push(1);
//Creando una nueva lista concatenando un nuevo numero
const anotherList = list.concat(157);
console.log(anotherList[0]);

//Objeto
const persona =  {
  name: "Miguel",
  twitter: "@midudev",
  age: 18,
  isDeveloper: true,
  links: ["https://midu.tube", "https://midu.live"]
}

console.log(persona.name);

//Function expression - Arrow Function       
              //Parametros
const sumar = (operando1, operando2) => {
  return (operando1 + operando2);
}

//     Argumentos
const op1 = 8;
const op2 = 2;


//Declaremos una funcion

function restar (a,b) {
  return a - b;
}