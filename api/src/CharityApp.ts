import { App, BaseApp } from './core';
import { FamilyController } from './modules/Family';
import { PrismaService } from './modules/Family/PrismaService';

@App({
  version: 1,
  path: '/api',
  controllers: [FamilyController],
  providers: [PrismaService],
})
export class CharityApp extends BaseApp {}
