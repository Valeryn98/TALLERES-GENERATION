function Carrito() {
  this.productos = [];
  this.total = 0;

  this.agregarProducto = function(nombre, precio) {
    this.productos.push({ nombre, precio });
    this.total += precio;
    console.log(`Producto agregado: ${nombre} ($${precio})`);
  };

  this.calcularDescuento = function() {
    if (this.total > 100) {
      let descuento = this.total * 0.10;
      console.log(`Descuento 10% aplicado. Total: $${(this.total - descuento).toFixed(2)}`);
    } else if (this.total > 50) {
      let descuento = this.total * 0.05;
      console.log(`Descuento 5% aplicado. Total: $${(this.total - descuento).toFixed(2)}`);
    } else {
      console.log(`Total sin descuento: $${this.total.toFixed(2)}`);
    }
  };
}

// Prueba
let carrito = new Carrito();
carrito.agregarProducto("Camisa", 30);
carrito.agregarProducto("Pantalón", 40);
carrito.agregarProducto("Zapatos", 50);
carrito.calcularDescuento();
