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