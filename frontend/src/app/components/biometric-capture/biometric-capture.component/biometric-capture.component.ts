import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiometriaService } from '../../../services/biometria.service';
import { TarjetaFoto } from '../../tarjeta-foto/tarjeta-foto';
import { TarjetaHuella } from '../../tarjeta-huella/tarjeta-huella';
import { ModalCamara } from '../../modal-camara/modal-camara';

@Component({
  selector: 'app-biometric-capture',
  standalone: true,
  imports: [CommonModule, TarjetaFoto, TarjetaHuella, ModalCamara],
  templateUrl: './biometric-capture.component.html',
  styleUrls: ['./biometric-capture.component.css']
})
export class BiometricCaptureComponent {
  
  fotoBase64: string | null = null;
  huellaTemplate: string | null = null;
  esperohuella: boolean = false;
  mostrarCamara: boolean = false;
  enviando: boolean = false;

  constructor(
    private biometriaService: BiometriaService,
    private cdr: ChangeDetectorRef
  ) {}

  abrirCamara() {
    this.mostrarCamara = true;
  }

  cerrarCamara() {
    this.mostrarCamara = false;
  }

  guardarFotoRecibida(fotoBase64QueLlegoDelHijo: string) {
    this.fotoBase64 = fotoBase64QueLlegoDelHijo;
    this.cerrarCamara(); // Apagamos el modal
  }

  capturarHuella() {
    this.esperohuella = true;
    this.biometriaService.capturarHuellaLocal().subscribe({
      next: (res) => {
        this.huellaTemplate = res.template;
        this.esperohuella = false;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error capturando huella', err);
        this.esperohuella = false;
        this.cdr.detectChanges(); 
      }
    });
  }

  enviarDatos() {
    if (this.enviando) return;

    this.enviando = true;
    console.log('👉 Preparando envío al servidor central...');

    const payload = {
      idUsuario: 'USR-12345',
      fotoBase64: this.fotoBase64,
      huellaTemplate: this.huellaTemplate
    };

    this.biometriaService.registrarIdentidad(payload).subscribe({
      next: (respuesta) => {
        console.log('✅ Éxito:', respuesta);
        this.resetearFormulario();
        this.enviando = false;
        this.cdr.detectChanges();
        alert('Validación exitosa');
      },
      error: (error) => {
        console.error('Error al enviar al backend', error);
        this.enviando = false;
        this.cdr.detectChanges();
        alert('Hubo un error al guardar los datos');
      }
    });
  }

  resetearFormulario() {
    this.fotoBase64 = null;
    this.huellaTemplate = null;
  }
}