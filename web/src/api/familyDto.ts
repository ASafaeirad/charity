import type { CreateFamilyDto, CreateFamilyDtoSeverity } from '../generated';

export interface CreateFamilyFields {
  name: string;
  severity: CreateFamilyDtoSeverity;
}

export const toFamilyDto = (family: CreateFamilyFields): CreateFamilyDto =>
  family;
