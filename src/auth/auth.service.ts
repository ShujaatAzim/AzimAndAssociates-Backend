import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  signIn() {
    return { message: "I am signed in!" };
  }

  signUp() {
    return { message: "I am signed up!" };
  }
}