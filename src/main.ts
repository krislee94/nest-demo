import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useStaticAssets('public');
  app.use(cookieParser()); //使用cookie
  await app.listen(7003);
}
bootstrap();
