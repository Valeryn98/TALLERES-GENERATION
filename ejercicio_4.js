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