import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import databaseConfig from './config/database.config';
import { validate } from './env-var-dto';
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
      validate,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
