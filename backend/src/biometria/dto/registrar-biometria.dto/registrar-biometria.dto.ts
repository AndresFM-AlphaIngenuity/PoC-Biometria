import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class RegistrarBiometriaDto {
  @IsString()
  @IsNotEmpty()
  idUsuario: string;

  @IsOptional()
  @IsNotEmpty()
  fotoBase64: string; // Contiene "data:image/jpeg;base64,..."

  @IsString()
  @IsNotEmpty()
  huellaTemplate: string;
}