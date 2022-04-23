import type { Income } from '@prisma/client';

import type { Member } from './member.entity';

export class Job {
  id: string;
  title: string | null;
  income: Income | null;
  Member?: Member | null;
  memberId: number | null;
}
