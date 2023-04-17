import {
  Controller,
  Delete,
  Get,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/guards';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @UseGuards(JwtGuard)
  @Get('me')
  getCurrentUser(@Req() req: Request) {
    return this.userService.getCurrentUser(req);
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
