import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserByID(@Param('id') id: number) {
    return this.userService.getUserByID(id);
  }

  @Delete(':id')
  deleteUserByID(@Param('id') id: number) {
    return this.userService.deleteUserByID(id);
  }
}
