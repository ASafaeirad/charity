import { Controller, Get } from '@nestjs/common';

import type { Family } from '../../prisma/client';
import { FamilyService } from './family.service';

@Controller('/family')
export class FamilyController {
  constructor(private familyService: FamilyService) {}

  @Get('/')
  getAll(): Promise<Family[]> {
    return this.familyService.families();
  }
}
