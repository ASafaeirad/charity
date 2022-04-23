import type { Options } from 'orval';

const config: Record<string, Options> = {
  charity: {
    input: './swagger.json',
    output: {
      mode: 'split',
      workspace: 'web/src/generated/',
      target: 'api.ts',
    },
  },
};

export default config;
