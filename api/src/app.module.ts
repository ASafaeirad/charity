import { Module } from '@nestjs/common';

import { FamilyModule } from './family/family.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FamilyModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
