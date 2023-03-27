import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PropertyController } from './property/property.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController, PropertyController],
  providers: [AppService],
})
export class AppModule {}
