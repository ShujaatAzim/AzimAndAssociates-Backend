interface Property {
  tenants: Tenant[];
  leaseStart: Date;
  leaseEnd: Date;
}

interface Tenant {
  firstName: string;
  lastName: string;
  age: number;
  dob: Date;
}

export const data = {
  users: [],
  properties: []
}