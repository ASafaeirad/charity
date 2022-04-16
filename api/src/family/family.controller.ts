import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { Family } from './entities/family.entity';
import { FamilyService } from './family.service';

@Controller('/family')
export class FamilyController {
  constructor(private familyService: FamilyService) {}

  @Get('/')
  @ApiOkResponse({ type: Family })
  getAll(): Promise<Family[]> {
    return this.familyService.families();
  }
}
