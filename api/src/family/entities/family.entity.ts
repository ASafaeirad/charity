import type { Severity } from '@prisma/client';

import type { Member } from '../../member/entities/member.entity';
import type { Referer } from '../../referer/entities/referer.entity';

export class Family {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  household?: Member | null;
  householdId: number | null;
  referral?: Referer | null;
  refererId: number | null;
  severity: Severity;
  members?: Member[];
}
