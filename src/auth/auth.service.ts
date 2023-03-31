import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: AuthDto) {
    // create pw hash save new user to db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash: await argon.hash(dto.password),
        firstName: dto.firstName,
        lastName: dto.lastName,
      },
      select: {
        id: true,
        email: true,
        hash: false,
        firstName: true,
        lastName: true,
      },
    });

    return user;
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
