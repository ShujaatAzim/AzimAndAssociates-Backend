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

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

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
