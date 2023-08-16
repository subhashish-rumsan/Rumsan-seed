import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import databaseConfig from './config/database.config';
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
      // #NOTE: Increasing the performance of environmental variable
      cache: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
