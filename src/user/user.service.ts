import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers() {
    return [
      { id: 1, user: 'user 1' },
      { id: 2, user: 'user 2' },
    ];
  }

  getUserByID(id: number) {
    return { user: id };
  }

  deleteUserByID(id: number) {
    return { user: id, status: 'deleted' };
  }
}
