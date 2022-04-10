import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { FamilyService } from './family.service';

describe('FamilyService', () => {
  let service: FamilyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyService],
    }).compile();

    service = module.get<FamilyService>(FamilyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
