import type { Family } from '../../family/entities/family.entity';

export class Referer {
  id: number;
  name: string | null;
  Family?: Family[];
}
