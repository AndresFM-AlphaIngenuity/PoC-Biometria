import { Injectable } from '@nestjs/common';
import { RegistrarBiometriaDto } from "./dto/registrar-biometria.dto/registrar-biometria.dto";

@Injectable()
export class BiometriaService {
  registrar(data: RegistrarBiometriaDto) {


    console.log(`--- Nueva Identidad Recibida ---`);
    console.log(`Usuario ID: ${data.idUsuario}`);
    console.log(`¿Trae Foto?: ${data.fotoBase64 ? 'Si' : 'No'}`);
    console.log(`¿Trae huella?: ${data.huellaTemplate ? 'Si' : 'No'}`);

    return { 
      success: 'Success', 
      message: "Identidad biométrica registrada con éxito en la base de datos",
      usuarioId: data.idUsuario
    };
  }
}