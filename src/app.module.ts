import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import databaseConfig from './config/database.config';
// import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      // #NOTE: Experimenting different ways to configure environment variables
      // envFilePath: process.env.NODE_ENV
      //   ? `.env.${process.env.NODE_ENV}`
      //   : '.env.development',

      // #NOTE: Trying loading setup for .env files
      load: [configuration, databaseConfig],
      // # NOTE: Making configuration global
      isGlobal: true,
      // #NOTE: Increasing the performance of environment variable
      cache: true,

      // #NOTE: Testing validation if in-case environment variables are absent
      // validationSchema: Joi.object({
      //   NODE_ENV: Joi.string()
      //     .valid('development', 'production', 'staging')
      //     .default('development'),
      //   PORT: Joi.number().default(3000),
      // }),

      // NOTE: Added validation options to control validation behaviour
      // validationOptions: {
      //   allowUnknown: false,
      //   abortEarly: true,
      // },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
