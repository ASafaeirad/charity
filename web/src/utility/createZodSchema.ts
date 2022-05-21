import type { ZodTypeAny } from 'zod';
import { z } from 'zod';

export const createZodSchema = <T>(obj: Record<keyof T, ZodTypeAny>) =>
  z.object(obj);

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_enum_value)
    return { message: 'required' };

  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);
