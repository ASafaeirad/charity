import type { Type } from '.';
import { MetadataKeys } from './MetadataKeys';

export function Controller(path = '/'): ClassDecorator {
  // @ts-ignore
  return <T>(target: Type<T>) => {
    Reflect.defineMetadata(MetadataKeys.Path, path, target);
  };
}
