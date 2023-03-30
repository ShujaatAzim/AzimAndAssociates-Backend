import { Body, Controller, Delete, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: any) {
    console.log({
      dto: dto,
    });
    return this.authService.register();
  }

  @Post('login')
  login() {
    return this.authService.login();
  }

  @Delete(':id')
  logout() {
    return this.authService.logout();
  }
}
