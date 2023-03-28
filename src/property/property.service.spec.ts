import { Test, TestingModule } from '@nestjs/testing';
import { PropertyService } from './property.service';

describe('PropertyService', () => {
  let service: PropertyService;
  let res: any, err: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyService],
    }).compile();

    service = module.get<PropertyService>(PropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllProperties', () => {
    beforeEach(async () => {
      res = service.getAllProperties();
    });

    describe('happy paths', () => {
      let property = { id: '', property: '' };

      it('should return all properties', () => {
        expect(res.length).toEqual(2);
      });

      it('should return the properties in the expected format', () => {
        expect(Object.keys(res[0])).toEqual(Object.keys(property));
      });
    });

    describe('sad paths', () => {
      let property = { id: '', property: '' };
      // future sad paths go here
    });
  });
});
