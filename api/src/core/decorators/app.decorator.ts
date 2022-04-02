import type { Constructor } from '../Constructor';
import { MetadataKeys } from './MetadataKeys';

interface AppConfig {
  [MetadataKeys.Version]?: number;
  [MetadataKeys.Path]?: string;
  [MetadataKeys.Controllers]?: Constructor<any>[];
  [MetadataKeys.Providers]?: Constructor<any>[];
}

export function App({
  controllers = [],
  path = '/api',
  version = 1,
  providers = [],
}: AppConfig): ClassDecorator {
  return (target: Function) => {
    Reflect.defineMetadata(MetadataKeys.Version, version, target);
    Reflect.defineMetadata(MetadataKeys.Path, path, target);
    Reflect.defineMetadata(MetadataKeys.Controllers, controllers, target);
    Reflect.defineMetadata(MetadataKeys.Providers, providers, target);
  };
}
