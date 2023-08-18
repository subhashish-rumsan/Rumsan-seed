import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { Logger, VersioningType } from '@nestjs/common';
import { GlobalExecutionFilter } from './Errors/exception.filter';
import { setupSwagger } from './swagger';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    // eslint-disable-next-line prettier/prettier
    new FastifyAdapter(),
    { bufferLogs: true }
  );
  const logger = new Logger('bootstrap');
  // app.useLogger(app.get(Logger));
  // app.useGlobalInterceptors(new LoggerErrorInterceptor());
  const configService = app.get(ConfigService);
  // NOTE: Setting up global prefix. By deafult the version contains api/v1
  app.setGlobalPrefix('api').enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.useGlobalFilters(new GlobalExecutionFilter());
  setupSwagger(app);
  const PORT = configService.get<number>('DEV_PORT') || 3000;
  await app.listen(PORT);
  logger.log(`Application listening on port ${PORT}`);
}
bootstrap();
