import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {
    return {
      message: 'I have successfully logged in!',
    };
  }

  register() {
    return {
      message: 'I have successfully registered!',
    };
  }

  logout() {
    return {
      message: 'Session terminated.',
    };
  }
}
