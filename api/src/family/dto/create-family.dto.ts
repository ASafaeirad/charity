import { ApiProperty } from '@nestjs/swagger';
import { Severity } from '@prisma/client';

export class CreateFamilyDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ enum: Severity })
  severity: Severity;

  @ApiProperty()
  refererId?: number;
}
