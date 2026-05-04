import { Component } from '@angular/core';
import { BiometricCaptureComponent } from './components/biometric-capture/biometric-capture.component/biometric-capture.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BiometricCaptureComponent],
  templateUrl: './app.html', 
  styleUrl: './app.css'      
})
export class AppComponent {
  title = 'poc-biometria';
}