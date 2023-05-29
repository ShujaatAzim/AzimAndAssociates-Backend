import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  successfulConnection() {
    return { app_running: true };
  }
}
