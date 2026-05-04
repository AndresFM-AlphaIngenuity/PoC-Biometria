import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BiometriaService {
  private readonly API_NEST = 'http://localhost:3000/biometria';
  private readonly API_LOCAL_HARDWARE = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  capturarHuellaLocal(): Observable<any> {
    return this.http.post(`${this.API_LOCAL_HARDWARE}/capturar-huella`, {});
  }

  registrarIdentidad(payload: any): Observable<any> {
    return this.http.post(`${this.API_NEST}/registrar`, payload);
  }
}