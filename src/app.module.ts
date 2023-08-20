import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import configuration from './config/configuration';
import databaseConfig from './config/database.config';
import { validate } from './env-var-dto';
import { PrismaModule } from './prisma/prisma.module';
import { BlogsModule } from './blogs/blogs.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

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
    PrismaModule,
    BlogsModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
