import { z } from 'zod';

import { createFamilyDtoSeverities } from '../generated';
import { createZodSchema } from '../utility/createZodSchema';
import type { CreateFamilyFields } from './familyDto';

export const familySchema = createZodSchema<CreateFamilyFields>({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  severity: z.enum(createFamilyDtoSeverities),
});
