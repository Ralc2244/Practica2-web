import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: Producto[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  eliminarProducto(index: number): void {
    this.carritoService.eliminarProducto(index);
  }

  actualizarCantidad(productoId: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const nuevaCantidad = parseInt(input.value, 10);

    if (this.carritoService.actualizarCantidad(productoId, nuevaCantidad)) {
      // Actualización exitosa
      console.log('Cantidad actualizada');
    } else {
      // Restaura el valor anterior si la actualización falla
      const producto = this.carrito.find((p) => p.id === productoId);
      if (producto) {
        input.value = producto.cantidad.toString();
      }
      alert('No hay suficiente stock o la cantidad no es válida.');
    }
  }

  generarDescargarXML(): void {
    const xml = this.carritoService.generarXML();
    this.carritoService.descargarXML(xml);
  }
}