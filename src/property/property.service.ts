import { Get, Delete, Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  @Get()
  getAllProperties() {
    return [
      { id: 1, property: 'property 1' },
      { id: 2, property: 'property 2' },
      { id: 3, property: 'property 3' },
    ];
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
