import type {
  Diploma,
  DisabilityStatus,
  EducationStatus,
  Gender,
  HealthStatus,
  MaritalStatus,
  Religion,
} from '@prisma/client';

import type { Family } from '../../family/entities/family.entity';
import type { Contact } from './contact.entity';
import type { Job } from './job.entity';
import type { Subsidy } from './subsidy.entity';

export class Member {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  addicted: boolean | null;
  dateOfBirth: Date | null;
  fatherName: string | null;
  gender: Gender | null;
  insurance: string | null;
  issuedAt: Date | null;
  maritalStatus: MaritalStatus | null;
  nationality: string | null;
  religion: Religion | null;
  educationStatus: EducationStatus | null;
  lastDiploma: Diploma | null;
  disabilityStatus: DisabilityStatus | null;
  disabilityDescription: string | null;
  healthStatus: HealthStatus;
  healthDescription: string | null;
  Contact?: Contact;
  contactId: string;
  Jobs?: Job[];
  subsidy?: Subsidy[];
  MemberOfFamilyId?: Family | null;
  memberOfFamilyId: number | null;
  HouseholdOfFamily?: Family[];
}
