import { Controller, Post, Body } from '@nestjs/common';
import { BiometriaService } from './biometria.service';
import { RegistrarBiometriaDto } from "./dto/registrar-biometria.dto/registrar-biometria.dto";

@Controller('biometria')
export class BiometriaController {
  constructor(private readonly biometriaService: BiometriaService) {}

  @Post('registrar')
  registrar(@Body() data: RegistrarBiometriaDto) {
    return this.biometriaService.registrar(data);
  }
}