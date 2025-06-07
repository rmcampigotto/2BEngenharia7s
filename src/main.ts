import './reflect-fix';
import { NestFactory } from '@nestjs/core/nest-factory';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();