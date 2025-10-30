const entrada = require("readline");
 
const teclado = entrada.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
function pedirClave() {
  teclado.question("Escribe la contraseña: ", (clave) => {
    if (clave === "1234") {
      console.log("Contraseña correcta");
      teclado.close();
    } else {
      console.log("Incorrecta, intenta otra vez");
      pedirClave();
    }
  });
}
 
pedirClave();