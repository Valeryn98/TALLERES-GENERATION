
let nombre =  "valery";        
let edad = 27;                
let esEstudiante = true;    
 
console.log("Nombre:", nombre);            
console.log("Edad:", edad);                
console.log("¿Es estudiante?", esEstudiante);
 

let sinValor;
 let valorNulo = null;
 
console.log("sinValor:", sinValor);
console.log("valorNulo:", valorNulo);  
 
const teclado = require("readline");
 
const rl = teclado.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question("¿En qué año naciste? ", (anioNacimiento) => {
  const edad = new Date().getFullYear() - Number(anioNacimiento);
  console.log("Tu edad aproximada es:", edad);
  rl.close();
});
 
const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question("Ingresa el primer número: ", (num1) => {
  rl.question("Ingresa el segundo número: ", (num2) => {
    const suma = Number(num1) + Number(num2);
    console.log("La suma es:", suma);
    rl.close();
  });
});
 
const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question("¿Cuál es tu edad? ", (respuesta) => {
  const edad = Number(respuesta);
 
  if (edad >= 18) {
    console.log("Puedes entrar");
  } else {
    console.log("No puedes entrar");
  }
 
  rl.close();
});
 
const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question("Ingresa un número: ", (entrada) => {
  const numero = Number(entrada);
 
  if (numero > 0) {
    console.log("Es positivo");
  } else if (numero < 0) {
    console.log("Es negativo");
  } else if (numero === 0) {
    console.log("Es cero");
  } else {
    console.log("Entrada no válida");
  }
 
  rl.close();
});
 
const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question("Ingresa un número: ", (entrada) => {
  const limite = Number(entrada);
  let contador = 1;
 
  while (contador <= limite) {
    console.log(contador);
    contador++;
  }
 
  rl.close();
});
 