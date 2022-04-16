import type { Member } from './member.entity';

export class Contact {
  id: string;
  homeAddress: string | null;
  workAddress: string | null;
  homePhoneNumber: string | null;
  mobilePhoneNumber: string | null;
  workPhoneNumber: string | null;
  Member?: Member[];
}
