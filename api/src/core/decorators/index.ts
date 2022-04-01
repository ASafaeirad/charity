export * from './app.decorator';
export * from './controller.decorator';
export * from './injectable.decorator';
export * from './MetadataKeys';
export * from './request.decorator';

export type Type<T> = new (...args: any[]) => T;
