import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // it can be also enabled for specific url
  // app.enableCors({
  //   origin: 'http://localhost:3000',
  // });
  // else it works fine without origin

  app.enableCors();
  await app.listen(5000);
}
bootstrap();
