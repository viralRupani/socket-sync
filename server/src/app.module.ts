import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigatorModule } from './navigator/navigator.module';

@Module({
  imports: [NavigatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
