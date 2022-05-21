import { z } from 'zod';

import { createFamilyDtoSeverities } from '../generated';
import type { ErrorKeys } from '../i18n';
import { createZodSchema } from '../utility/createZodSchema';
import type { CreateFamilyFields } from './familyDto';

export const familySchema = createZodSchema<CreateFamilyFields>({
  name: z.string().min(2, { message: 'min_length' as ErrorKeys }),
  severity: z.enum(createFamilyDtoSeverities),
});
