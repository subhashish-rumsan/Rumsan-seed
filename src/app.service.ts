import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const dbPORT = this.configService.get<string>('database.password');
    return dbPORT;
  }
}
