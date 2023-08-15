import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('subhashish')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('greet')
  hello(): string {
    return this.appService.getHello();
  }
}
