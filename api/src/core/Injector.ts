import type { Constructor } from './Constructor';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Injector {
  static container = new Map<string, any>();

  static resolve<T>(Target: Constructor<T>): T {
    if (Injector.container.has(Target.name))
      return Injector.container.get(Target.name);

    const tokens = Reflect.getMetadata('design:paramtypes', Target) ?? [];
    const injections = tokens.map((token: Constructor<unknown>): unknown =>
      Injector.resolve(token),
    );

    const instance = new Target(...injections);
    Injector.container.set(Target.name, instance);

    return instance;
  }
}
