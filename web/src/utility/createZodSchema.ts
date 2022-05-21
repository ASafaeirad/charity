import type { ZodTypeAny } from 'zod';
import { z } from 'zod';

export const createZodSchema = <T>(obj: Record<keyof T, ZodTypeAny>) =>
  z.object(obj);
