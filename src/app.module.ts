import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DispositivosModule } from './dispositivos/dispositivos.module';

@Module({
  imports: [PrismaModule, DispositivosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
