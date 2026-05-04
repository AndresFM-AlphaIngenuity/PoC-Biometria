import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-foto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-foto.html',
  styleUrl: './tarjeta-foto.css',
})
export class TarjetaFoto {
  @Input() fotoBase64: string | null = null;

  @Output() abrirCamara = new EventEmitter<void>();

  solicitarCamara() {
    this.abrirCamara.emit();
  }
}
