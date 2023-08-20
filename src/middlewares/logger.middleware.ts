import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(`HTTP`);

  use(req: FastifyRequest, res: FastifyReply, next: () => void) {
    this.logger.log(
      `Logging HTTP request ${req.method} ${req.url} ${res.statusCode}`
    );
    next();
  }
}
