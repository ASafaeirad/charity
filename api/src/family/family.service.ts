import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import type { CreateFamilyDto } from './dto/create-family.dto';

@Injectable()
export class FamilyService {
  constructor(private prisma: PrismaService) {}

  public families() {
    return this.prisma.family.findMany({
      include: {
        household: { include: { Contact: true, Jobs: true } },
        members: true,
        referer: true,
      },
    });
  }

  public create(family: CreateFamilyDto) {
    return this.prisma.family.create({ data: family });
  }
}
