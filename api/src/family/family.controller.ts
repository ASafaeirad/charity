import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CreateFamilyDto } from './dto/create-family.dto';
import { Family } from './entities/family.entity';
import { FamilyService } from './family.service';

@Controller('/family')
export class FamilyController {
  constructor(private familyService: FamilyService) {}

  @Get('/')
  @ApiTags('family')
  @ApiOkResponse({ type: Family })
  getAll(): Promise<Family[]> {
    return this.familyService.families();
  }

  @Post('/')
  @ApiTags('family')
  @HttpCode(201)
  @ApiCreatedResponse({ type: Family })
  create(@Body() body: CreateFamilyDto): Promise<Family> {
    return this.familyService.create(body);
  }
}
