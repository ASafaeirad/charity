import { Request, Response } from 'express';

import { Controller, Get } from '../../core';
import { PrismaService } from '../../PrismaService';

@Controller('/family')
export class FamilyController {
  constructor(private prisma: PrismaService) {}

  @Get()
  public async getAll(req: Request, res: Response) {
    const families = await this.prisma.family.findMany();
    res.json(families);
  }
}
