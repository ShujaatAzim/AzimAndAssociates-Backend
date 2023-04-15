import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto } from './dto';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

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

      return this.signToken(user.id, user.email);
    } catch (error) {
      throw new HttpException(
        error.code === 'P2002'
          ? `Error creating new user: Email Taken.`
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

    return this.signToken(user.id, user.email);
  }

  private async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email: email,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }

  async logout() {
    return {
      message: 'Session terminated.',
    };
  }
}
