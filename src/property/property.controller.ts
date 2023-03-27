import { Controller, Get, Delete, Param } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  //
  @Get('all')
  getAllProperties() {
    return ['array of all properties'];
  }

  @Get(':id')
  getPropertyByID(@Param('id') id: number) {
    return `Page for property with id: ${id}`;
  }

  @Delete(':id')
  deletePropertyByID(@Param('id') id: number) {
    return `Deleting property with id: ${id}...`;
  }
}
