const PATHS = [
  '/',
  '/family/add',
  '/family/list',
  '/campaign/add',
  '/campaign/list',
] as const;

export type Path = typeof PATHS[number];
