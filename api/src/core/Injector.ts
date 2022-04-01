import type { Type } from './decorators';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Injector {
  static container = new Map<string, any>();

  static resolve<T>(target: Type<T>): T {
    if (Injector.container.has(target.name)) {
      return Injector.container.get(target.name);
    }

    const tokens = Reflect.getMetadata('design:paramtypes', target) ?? [];
    console.log({ name: target.name, tokens });

    const injections = tokens.map((token: Type<any>): any =>
      Injector.resolve(token),
    );

    const instance = new target(...injections);
    Injector.container.set(target.name, instance);

    return instance;
  }
}
