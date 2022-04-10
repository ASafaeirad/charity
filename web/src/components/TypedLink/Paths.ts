const PATHS = ['/', '/families'] as const;

export type Path = typeof PATHS[number];
