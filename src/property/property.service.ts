import { Get, Delete, Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  @Get()
  getAllProperties() {
    return ['array of all properties'];
  }

  @Get()
  getPropertyByID(id: number) {
    return { propertyID: id };
  }

  @Delete()
  deletePropertyByID(id: number) {
    return { propertyID: id, status: 'deleted' };
  }
}
