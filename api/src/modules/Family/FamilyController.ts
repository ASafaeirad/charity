import type { Request, Response } from 'express';

import { Controller, Get } from '../../core';
import type { PrismaService } from './PrismaService';

@Controller('/family')
export class FamilyController {
  constructor(private prisma: PrismaService) {}

  @Get()
  public getAll(req: Request, res: Response) {
    res.json({});
  }
}
