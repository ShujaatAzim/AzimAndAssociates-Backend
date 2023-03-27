import { Controller, Get, Delete, Param } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get('all')
  getAllProperties() {
    return this.propertyService.getAllProperties();
  }

  @Get(':id')
  getPropertyByID(@Param('id') id: number) {
    return this.propertyService.getPropertyByID(id);
  }

  @Delete(':id')
  deletePropertyByID(@Param('id') id: number) {
    return this.propertyService.deletePropertyByID(id);
  }
}
