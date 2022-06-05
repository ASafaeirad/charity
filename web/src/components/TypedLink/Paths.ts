const PATHS = ['/', '/family/add', '/family/list', '/campaign/list'] as const;

export type Path = typeof PATHS[number];
