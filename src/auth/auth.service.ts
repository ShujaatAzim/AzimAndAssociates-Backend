import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  register() {
    return {
      message: 'I have successfully registered!',
    };
  }

  login() {
    return {
      message: 'I have successfully logged in!',
    };
  }

  logout() {
    return {
      message: 'Session terminated.',
    };
  }
}
