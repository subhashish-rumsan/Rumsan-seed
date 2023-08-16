import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const configService = app.get(ConfigService);
  const API_VERSION = configService.get<string>('API_VERSION') || 'v1';
  // NOTE: Setting up global prefix. By deafult the version contains api/v1
  app.setGlobalPrefix(`/api/${API_VERSION}`);
  const PORT = configService.get<number>('DEV_PORT') || 3000;
  await app.listen(PORT);
}
bootstrap();
