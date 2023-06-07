import { Injectable, Get, Delete } from '@nestjs/common';

@Injectable()
export class TenantService {
  @Get()
  getAllTenants() {
    return [
      { id: 1, tenant: 'tenant 1' },
      { id: 2, tenant: 'tenant 2' },
      { id: 3, tenant: 'tenant 3' },
    ];
  }

  @Get()
  getTenantByID(id) {
    return {
      tenantID: id,
    };
  }

  @Delete()
  deleteTenantByID(id: number) {
    return { tenantID: id, status: 'deleted' };
  }
}
