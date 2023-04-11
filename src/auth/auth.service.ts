import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: RegisterDto) {
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
      throw new HttpException(
        error.code === 'P2002'
          ? `Error creating new user: Credentials Taken.`
          : `Error creating new user: ${JSON.stringify(error)}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user)
      throw new HttpException(
        'Email is incorrect. Please try again.',
        HttpStatus.FORBIDDEN,
      );

    const verifyPassword = await argon.verify(user.hash, dto.password);

    if (!verifyPassword) {
      throw new HttpException(
        'Password is incorrect. Please try again.',
        HttpStatus.FORBIDDEN,
      );
    }
    delete user.hash;
    return user;
  }

  async logout() {
    return {
      message: 'Session terminated.',
    };
  }
}
