import { MetadataKeys } from './MetadataKeys';

export function Injectable(): ClassDecorator {
  return (target: object) => {
    Reflect.defineMetadata(MetadataKeys.Injectable, true, target);
  };
}
