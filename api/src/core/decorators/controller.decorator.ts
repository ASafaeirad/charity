import { MetadataKeys } from './MetadataKeys';

export function Controller(path = '/'): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(MetadataKeys.Path, path, target);
  };
}
