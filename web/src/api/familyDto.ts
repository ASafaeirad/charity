import type { CreateFamilyDto, CreateFamilyDtoSeverity } from '../generated';

interface Household {
  name: string;
  lastName: string;
  gender: 'female' | 'male';
}

export interface CreateFamilyFields {
  name: string;
  severity: CreateFamilyDtoSeverity;
  household: Household;
}

export const toFamilyDto = (family: CreateFamilyFields): CreateFamilyDto =>
  family;
