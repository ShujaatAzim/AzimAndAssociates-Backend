import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, AuthController],
      providers: [AppService, AuthService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
});
