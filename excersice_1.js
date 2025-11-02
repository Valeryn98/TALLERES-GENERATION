function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;

  this.prestar = function() {
    if (this.prestado === false) {
      this.prestado = true;
      console.log(`Has prestado el libro "${this.titulo}" de ${this.autor}.`);
    } else {
      console.log(`El libro "${this.titulo}" ya está prestado.`);
    }
  };
}

// Prueba
let libro1 = new Libro("Cien Años de Soledad", "Gabriel García Márquez");
libro1.prestar(); // Primer préstamo
libro1.prestar(); //Ya está prestado
