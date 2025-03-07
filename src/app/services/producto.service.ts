import { Component, Injectable } from '@angular/core';
import { Producto } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[]=[
    new Producto(1,"Resistencia", 1, 'assets/Resistencia.jpg'),
    new Producto(2,"Capacitor", 5, 'assets/Capacitor.jpg'),
    new Producto(3,"Led", 2, 'assets/led.jpg'),
  ]

  obtenerProductos():Producto[]{return this.productos}
}
