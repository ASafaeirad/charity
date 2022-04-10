import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { FamilyController } from './family.controller';

describe('FamilyController', () => {
  let controller: FamilyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FamilyController],
    }).compile();

    controller = module.get<FamilyController>(FamilyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
