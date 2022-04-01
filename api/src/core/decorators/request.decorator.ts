import { MetadataKeys } from './MetadataKeys';

export enum RequestMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
  ALL = 'use',
  OPTIONS = 'options',
  HEAD = 'head',
}

interface RequestMappingMetadata {
  path?: string;
  method: RequestMethod;
}

const RequestMapping = ({
  method,
  path = '/',
}: RequestMappingMetadata): any => {
  return (
    _: any,
    __: string | symbol,
    descriptor: TypedPropertyDescriptor<any>,
  ) => {
    Reflect.defineMetadata(MetadataKeys.IsHandler, true, descriptor.value);
    Reflect.defineMetadata(MetadataKeys.Path, path, descriptor.value);
    Reflect.defineMetadata(MetadataKeys.Method, method, descriptor.value);
    return descriptor;
  };
};

const createMappingDecorator =
  (method: RequestMethod) =>
  (path?: string): MethodDecorator =>
    RequestMapping({ path, method });

export const Get = createMappingDecorator(RequestMethod.GET);
