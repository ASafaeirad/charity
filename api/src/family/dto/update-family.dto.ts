import { ApiProperty } from '@nestjs/swagger';
import { Severity } from '@prisma/client';

export class UpdateFamilyDto {
  @ApiProperty({ enum: Severity })
  severity?: Severity;
}
