import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  signIn() {
    return { 
      message: "I have successfully signed in!" 
    };
  };

  signUp() {
    return { 
      message: "I have successfully signed up!" 
    };
  };

  logout() {
    return { 
      message: "Session terminated." 
    };
  };
}