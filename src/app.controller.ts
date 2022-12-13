import { Controller, Get, Delete } from '@nestjs/common';

@Controller("property")
export class AppController {
  @Get("all")
  getAllProperties () {
    return ["array of all properties"];
  }

  @Get(":id")
  getPropertyByID () {
    return "property # :id"
  }

  @Delete(":id")
  deletePropertyByID () {
    return `Deleting property...`
  }
}