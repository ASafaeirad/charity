import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FamilyService {
  constructor(private prisma: PrismaService) {}

  public families() {
    return this.prisma.family.findMany({
      include: {
        household: {
          include: {
            Contact: true,
            Jobs: true,
          },
        },
      },
    });
  }
}
