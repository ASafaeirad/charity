/* eslint-disable fp/no-loops, fp/no-let */
import { isNull } from '@fullstacksjs/toolbox';

import type { PathParams } from './PathParams';
import type { Path } from './Paths';

export const buildUrl = <P extends Path>(
  path: P,
  params?: PathParams<P>,
): string => {
  if (isNull(params)) return path;

  const paramObj: { [i: string]: string } = params;

  let ret: string = path;
  for (const key of Object.keys(paramObj)) {
    ret = ret.replace(`:${key}`, paramObj[key]);
  }

  return ret;
};
