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