import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BiometriaController } from './biometria/biometria.controller';
import { BiometriaService } from './biometria/biometria.service';

@Module({
  imports: [],
  controllers: [AppController, BiometriaController],
  providers: [AppService, BiometriaService],
})
export class AppModule {}
