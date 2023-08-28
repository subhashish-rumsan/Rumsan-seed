import { Body, Controller, Post, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { AuthEntity } from './entities/auth.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private readonly logger = new Logger('Auth Controller');

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() { email, password }: LoginDto) {
    this.logger.log(`Logging in user with email: ${email}`);
    const authResult = await this.authService.login(email, password);

    if (authResult) {
      this.logger.log(`User logged in successfully: ${email}`);
    } else {
      this.logger.log(`Login failed for user with email: ${email}`);
    }

    return authResult;
  }
}
