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
            Education: true,
            Disability: true,
            Health: true,
            Info: true,
            Contact: true,
            Job: true,
          },
        },
      },
    });
  }
}
