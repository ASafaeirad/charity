import type { Diploma, EducationStatus } from '@prisma/client';

import type { Member } from './member.entity';

export class Education {
  id: string;
  status: EducationStatus | null;
  lastDiploma: Diploma | null;
  Member?: Member[];
}
