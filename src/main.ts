import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { Logger, VersioningType } from '@nestjs/common';
import { GlobalExecutionFilter } from './Errors/exception.filter';
import { setupSwagger } from './swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    // eslint-disable-next-line prettier/prettier
    new FastifyAdapter(),
    { bufferLogs: true }
  );

  const logger = new Logger('bootstrap');
  const configService = app.get(ConfigService);
  // NOTE: Setting up global prefix. By deafult the version contains api/v1
  app.setGlobalPrefix('api').enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.useGlobalFilters(new GlobalExecutionFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const PORT = configService.get<number>('DEV_PORT') || 3000;
  await app.listen(PORT);
  logger.log(`Application listening on port ${PORT}`);
}
bootstrap();
