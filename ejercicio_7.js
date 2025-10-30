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