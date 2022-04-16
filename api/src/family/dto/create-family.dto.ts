import { ApiProperty } from '@nestjs/swagger';
import { Severity } from '@prisma/client';

export class CreateFamilyDto {
  @ApiProperty({ enum: Severity })
  severity: Severity;
}
