import type { HealthStatus } from '@prisma/client';

import type { Member } from './member.entity';

export class Health {
  id: string;
  status: HealthStatus;
  description: string | null;
  Member?: Member[];
}
