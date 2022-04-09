import type { Express, NextFunction, Request, Response } from 'express';
import express, { Router } from 'express';

import type { Config } from '../environment';
import { MetadataCompiler } from './MetadataCompiler';

export abstract class BaseApp {
  protected app: Express;
  protected router: Router;
  private compiler = new MetadataCompiler(this);

  constructor(protected config: Config) {
    this.app = express();
    this.router = Router();

    this.app.use(express.json());
    this.compiler.compile();
    const apiRoutes = this.compiler.getApiRoutes();
    apiRoutes.forEach((apiRoute) => {
      this.app[apiRoute.method](
        apiRoute.path,
        apiRoute.handler.bind(apiRoute.controller),
      );
    });
    this.app.use(function errorHandler(
      err: Error,
      _,
      res: Response,
      _next: NextFunction,
    ) {
      res.status(500);
      res.json({ message: err.message });
    });
  }

  listen() {
    return new Promise<Config>((resolve) => {
      this.app.listen(this.config.port, () => resolve(this.config));
    });
  }
}
