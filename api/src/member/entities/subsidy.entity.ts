import type { SubsidyType } from '@prisma/client';

import type { Member } from './member.entity';

export class Subsidy {
  id: string;
  type: SubsidyType;
  description: string | null;
  income: number;
  Member?: Member | null;
  memberId: number | null;
}
