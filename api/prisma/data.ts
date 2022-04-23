import type { Prisma } from '@prisma/client';

export const contactBody: Prisma.ContactCreateNestedOneWithoutMemberInput['create'] =
  {
    homeAddress: 'ایرانمهر بالا',
    homePhoneNumber: '+9832240110',
    mobilePhoneNumber: '+989224809110',
    workAddress: 'آق قلا',
    workPhoneNumber: '+9832240111',
  };

type CreateMemberBody = Omit<
  Prisma.XOR<
    Prisma.MemberCreateWithoutHouseholdOfFamilyInput,
    Prisma.MemberUncheckedCreateWithoutHouseholdOfFamilyInput
  >,
  'Contact' | 'contactId' | 'id' | 'memberOfFamilyId'
>;
type CreateFamilyBody = Omit<
  Prisma.XOR<Prisma.FamilyCreateInput, Prisma.FamilyUncheckedCreateInput>,
  'household' | 'householdId' | 'id' | 'members' | 'refererId'
>;

export const householdBody: CreateMemberBody = {
  addicted: false,
  disabilityStatus: 'Healthy',
  disabilityDescription: 'توضیحات اصلی',
  lastDiploma: 'Elementary',
  educationStatus: 'Dropout',
  healthStatus: 'Healthy',
  healthDescription: 'توضیحات سلامتی',
  dateOfBirth: new Date('2000-10-10'),
  fatherName: 'خاشقچی',
  gender: 'Male',
  maritalStatus: 'Married',
  nationality: 'ir',
  religion: 'Shia',
  issuedAt: new Date('2000-10-11'),
  insurance: 'کارگری',
  subsidy: {
    create: [{ income: 1e6, type: 'Committee', description: 'هیچ' }],
  },
  Jobs: {
    create: { income: 'Fixed', title: 'کارگر' },
  },
};

export const membersBody: CreateMemberBody[] = [
  {
    addicted: false,
    disabilityStatus: 'Healthy',
    disabilityDescription: 'توضیحات اصلی',
    lastDiploma: 'Elementary',
    educationStatus: 'Dropout',
    healthStatus: 'Healthy',
    healthDescription: 'توضیحات سلامتی',
    dateOfBirth: new Date('2000-10-10'),
    fatherName: 'خاشقچی',
    gender: 'Male',
    maritalStatus: 'Married',
    nationality: 'ir',
    religion: 'Shia',
    issuedAt: new Date('2000-10-11'),
    Jobs: {
      create: { income: 'Fixed', title: 'کارگر' },
    },
    insurance: 'کارگری',
  },
];

export const familyBody: CreateFamilyBody = {
  name: 'اصغری',
  severity: 'Poor',
  referer: { create: { name: 'شریعتی' } },
};
