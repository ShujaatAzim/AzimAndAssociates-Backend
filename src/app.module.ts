import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PropertyModule } from './property/property.module';
import { UserModule } from './user/user.module';
import { TenantModule } from './tenant/tenant.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, PropertyModule, UserModule, TenantModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
