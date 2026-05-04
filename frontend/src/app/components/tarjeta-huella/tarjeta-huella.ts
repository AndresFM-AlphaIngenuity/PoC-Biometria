import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-huella',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-huella.html',
  styleUrl: './tarjeta-huella.css'
})
export class TarjetaHuella {

  @Input() huellaTemplate: string | null = null;

  @Input() estaCapturando: boolean = false;

  @Output() capturar = new EventEmitter<void>();

  solicitarHuella() {
    this.capturar.emit();
  }
}