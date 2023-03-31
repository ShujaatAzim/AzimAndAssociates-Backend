import { Controller, Get, Param, Delete } from '@nestjs/common';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get('all')
  getAllTenants() {
    return this.tenantService.getAllTenants();
  }

  @Get(':id')
  getTenantByID(@Param('id') id: number) {
    return this.tenantService.getTenantByID(id);
  }

  @Delete(':id')
  deletePropertyByID(@Param('id') id: number) {
    return this.tenantService.deleteTenantByID(id);
  }
}
