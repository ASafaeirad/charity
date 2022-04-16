import type { DisabilityStatus } from '@prisma/client';

import type { Member } from './member.entity';

export class Disability {
  id: string;
  status: DisabilityStatus;
  description: string | null;
  Member?: Member[];
}
