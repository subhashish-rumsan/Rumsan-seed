import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
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
    UsersModule,
  ],
})
export class AppModule {}
