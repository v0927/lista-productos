import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoCardComponent } from './producto-card/producto-card';

interface Producto {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductoCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Lista de Productos';
  fechaActual = new Date();
  
  mostrarLista = true;
  nuevoProducto = '';
  
  productos: Producto[] = [
    { id: 1, nombre: 'Laptop HP' },
    { id: 2, nombre: 'Mouse Logitech' },
    { id: 3, nombre: 'Teclado Mecánico' },
    { id: 4, nombre: 'Monitor Samsung' }
  ];

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  agregarProducto() {
    if (this.nuevoProducto.trim()) {
      const nuevoId = this.productos.length > 0 
        ? Math.max(...this.productos.map(p => p.id)) + 1 
        : 1;
      
      this.productos.push({
        id: nuevoId,
        nombre: this.nuevoProducto.trim()
      });
      
      this.nuevoProducto = '';
    }
  }
}