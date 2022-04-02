import { App, BaseApp } from './core';
import { FamilyController } from './modules/Family';
import { PrismaService } from './PrismaService';

@App({
  controllers: [FamilyController],
  providers: [PrismaService],
})
export class CharityApp extends BaseApp {}
