/*Comando que es ejecutado en html
document.write("<h1> Hello world </h1>");
//Tipos de datos
    //String
    "Hello World" 
    'Hello world'

    //entero
    1
    2
    -3
    13413

    //float
    0.1
    0.23
    -23.5

    //boolean
    false
    true

    //Array (lista)
    ["joe","marta","Juan"]
    [ 1, 5, 5 ]

    //Objeto
    {
        "username": "juanito";
        "tall": 170;
        "age": 25
        "profesional": true
    }*/
console.log("Esto es una cadena");
console.log(true);
console.log(45);
console.log([1,2,3,4,5]);

console.log({"unser":"Pepito","age":20}); //objeto

/* Variables
var userName= "name";    Son variables editables en cualquier momento
let userLastName = "LastName"; El let practicamente lo mismo que var

const pi = 3,2415; Cuando no necesita ser cambiado el valor, una constante.


*/

/* 
if (){}
else if(){}
else{}

switch(variable){
    case "caso1":
        ...;
        break;
    case "caso2":
        ...;
        break;
    default:
        ...;
}
*/

/*
while(variable < > == != constante){
    ...;
}
for (let i =0; i< > == != constante; i ++ -- +1 -1....){
    ...;
}
*/
function saludo(){
    console.log("Hola");
}
saludo();