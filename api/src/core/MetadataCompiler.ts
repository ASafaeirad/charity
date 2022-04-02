import type { Handler } from 'express';
import { join as joinPath } from 'path';

import type { BaseApp } from './App';
import type { Constructor } from './Constructor';
import type { RequestMethod } from './decorators';
import { MetadataKeys } from './decorators';
import { Injector } from './Injector';

interface ApiRoute {
  method: RequestMethod;
  path: string;
  handler: Handler;
  controller: Constructor<any>;
}

export class MetadataCompiler {
  private rootPath: string;
  private version: number;
  private controllers: Constructor<any>[];
  private providers: Constructor<any>[];
  private _apiRoutes: ApiRoute[] = [];

  public getApiRoutes() {
    return this._apiRoutes;
  }

  constructor(private app: BaseApp) {
    const ctor = app.constructor;
    this.rootPath = Reflect.getMetadata(
      MetadataKeys.Path,
      this.app.constructor,
    );
    this.version = Reflect.getMetadata(MetadataKeys.Version, ctor);
    this.providers = Reflect.getMetadata(MetadataKeys.Providers, ctor);
    this.controllers = Reflect.getMetadata(MetadataKeys.Controllers, ctor);
  }

  public compile() {
    this.providers.forEach((item) => {
      Injector.resolve(item);
    });

    this._apiRoutes = this.controllers.flatMap<ApiRoute>((ControllerClass) => {
      const baseRoute = Reflect.getMetadata(MetadataKeys.Path, ControllerClass);
      const controller: Constructor<any> = Injector.resolve(ControllerClass);
      const members = Object.getOwnPropertyNames(
        Object.getPrototypeOf(controller),
      );

      return members
        .filter((key) =>
          Reflect.getMetadata(MetadataKeys.IsHandler, controller[key]),
        )
        .map((key) => {
          const handler: Handler = controller[key];
          const handlerRoute = Reflect.getMetadata(MetadataKeys.Path, handler);
          const method: RequestMethod = Reflect.getMetadata(
            MetadataKeys.Method,
            handler,
          );

          const path = joinPath(
            this.rootPath,
            `v${this.version}`,
            baseRoute,
            handlerRoute,
          );

          return { method, path, handler, controller };
        });
    });
  }
}
