import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  // Note: Injecting configservice in constructor to access environmental variables in Service Layer
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const dbPORT = this.configService.get<string>('database.port');
    return `Hello Subhashish ${dbPORT}`;
  }
}
