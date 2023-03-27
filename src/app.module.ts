import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PropertyModule } from './property/property.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, PropertyModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
