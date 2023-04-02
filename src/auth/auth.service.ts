import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: AuthDto) {
    try {
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
    } catch (error) {
      console.error(error.message);

      throw new HttpException(
        error.code === 'P2002'
          ? `Error creating new user: Credentials Taken.`
          : `Error creating new user: ${JSON.stringify(error)}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
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
