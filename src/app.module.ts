import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import databaseConfig from './config/database.config';
import { EnvironmentVariables } from './env-var-dto';
// import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      // #NOTE: Trying loading setup for .env files
      load: [configuration, databaseConfig],
      // # NOTE: Making configuration global
      isGlobal: true,
      // #NOTE: Increasing the performance of environment variable
      cache: true,
      // #NOTE: Validation using class-validator and class-transformer
      validate: (configuration: EnvironmentVariables) => {
        const validationPipe = new ValidationPipe({
          transform: true,
          whitelist: true,
          forbidNonWhitelisted: true,
          skipMissingProperties: false,
        });
        return validationPipe.transform(configuration, { type: 'body' });
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
