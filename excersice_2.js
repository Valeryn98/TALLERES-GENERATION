function ListaCompras() {
  this.productos = [];

  this.agregar = function(producto) {
    this.productos.push(producto);
  };

  this.mostrar = function() {
    console.log("Lista de compras:");
    for (let i = 0; i < this.productos.length; i++) {
      console.log(`${i + 1}. ${this.productos[i]}`);
    }
  };
}

// Prueba
let lista = new ListaCompras();
lista.agregar("Manzanas");
lista.agregar("Pan");
lista.agregar("Leche");
lista.mostrar();
