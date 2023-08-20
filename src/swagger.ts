import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const port = process.env.PORT;
  const logger = new Logger('swagger setup');
  const config = new DocumentBuilder()
    .setTitle('NEST JS Foundation Application')
    .setDescription('The User Management System API')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/documentation', app, document);
  logger.log(
    `Swagger Documentation running on the url http://localhost:${port}/api/docs`
  );
}
