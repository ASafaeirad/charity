import type { Family } from '../../family/entities/family.entity';
import type { Contact } from './contact.entity';
import type { Disability } from './disability.entity';
import type { Education } from './education.entity';
import type { Health } from './health.entity';
import type { Job } from './job.entity';
import type { PersonalInformation } from './personalInformation.entity';
import type { Subsidy } from './subsidy.entity';

export class Member {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  addicted: boolean;
  insurance: string | null;
  Info?: PersonalInformation;
  personalInformationId: string;
  Contact?: Contact;
  contactId: string;
  Education?: Education;
  educationId: string;
  Disability?: Disability | null;
  disabilityId: string | null;
  Health?: Health;
  healthId: string;
  Job?: Job;
  jobId: string;
  subsidy?: Subsidy[];
  FamilyMember?: Family | null;
  familyId: number | null;
  Family?: Family[];
}
