import {
  Controller,
  Get,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { JwtGuard } from 'src/guards';

// Should guards be used for all routes just in case?
// @UseGuards(JwtGuard)
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
