function Reproductor() {
  this.estado = "detenido";

  this.play = function() {
    if (this.estado === "detenido" || this.estado === "pausado") {
      this.estado = "reproduciendo";
      console.log("Reproduciendo música...");
    } else {
      console.log("Ya se está reproduciendo música.");
    }
  };

  this.pausar = function() {
    if (this.estado === "reproduciendo") {
      this.estado = "pausado";
      console.log("Música pausada.");
    } else {
      console.log("No hay música reproduciéndose.");
    }
  };

  this.detener = function() {
    this.estado = "detenido";
    console.log("Música detenida.");
  };
}

// Prueba
let mp3 = new Reproductor();
mp3.play();      // Reproduciendo música...
mp3.pausar();    // Música pausada.
mp3.play();      // Reproduciendo música...
mp3.detener();   // Música detenida.
