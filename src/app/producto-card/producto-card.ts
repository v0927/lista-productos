import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCardComponent {
  @Input() nombreProducto: string = '';
}