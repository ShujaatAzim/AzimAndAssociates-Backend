import { Controller, Get, Delete } from '@nestjs/common';

@Controller("property")
export class AppController {
  @Get("all")
  getAllProperties () {
    return ["all properties"];
  }

  @Get(":id")
  getPropertyByID () {
    return "one :id"
  }

  @Delete(":id")
  deletePropertyByID () {
    return `Deleting property...`
  }
}