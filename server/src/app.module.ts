import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigatorGateway } from './navigator.gateway';

@Module({
  controllers: [AppController],
  providers: [AppService, NavigatorGateway],
})
export class AppModule {}
