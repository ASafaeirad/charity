import type { Express } from 'express';
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

    const { handlers } = this.compiler.compile();
    handlers.forEach((handler) => {
      this.app[handler.method](
        handler.path,
        handler.handler.bind(handler.controller),
      );
    });
  }

  listen() {
    return new Promise<Config>((resolve) => {
      this.app.listen(this.config.port, () => resolve(this.config));
    });
  }
}
