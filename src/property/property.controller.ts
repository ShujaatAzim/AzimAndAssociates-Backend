import { Controller, Get, Delete, Param } from '@nestjs/common';
import { PropertyService } from './property.service';
import { JwtGuard } from '../guards';

// Should guards be used for all routes just in case?
// @UseGuards(JwtGuard)
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
