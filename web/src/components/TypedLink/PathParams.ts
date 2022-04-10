import type { Path } from './Paths';

type ExtractRouteParams<T> = string extends T
  ? Record<string, string>
  : T extends `${infer Ignore}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof ExtractRouteParams<Rest>]: string }
  : T extends `${infer Ignore}:${infer Param}`
  ? { [k in Param]: string }
  : {};

// Object which has matching parameter keys for a path.
export type PathParams<P extends Path> = ExtractRouteParams<P>;
