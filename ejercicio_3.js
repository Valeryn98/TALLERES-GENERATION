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