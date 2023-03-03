import { Controller, Get, Delete, Param } from '@nestjs/common';

@Controller("property")
export class AppController {
  @Get("all")
  getAllProperties () {
    return ["array of all properties"]
  }

  @Get(":id")
  getPropertyByID (@Param('id') id: string) {
    return `Page for property with id: ${id}`
  }

  @Delete(":id")
  deletePropertyByID (@Param('id') id: string) {
    return `Deleting property with id: ${id}...`
  }
}