import type { Gender, MaritalStatus, Religion } from '@prisma/client';

import type { Member } from './member.entity';

export class PersonalInformation {
  id: string;
  gender: Gender | null;
  dateOfBirth: Date | null;
  fatherName: string | null;
  issuedAt: string | null;
  nationality: string | null;
  religion: Religion | null;
  maritalStatus: MaritalStatus | null;
  Member?: Member[];
}
