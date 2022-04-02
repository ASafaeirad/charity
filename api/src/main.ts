import 'reflect-metadata';

import { CharityApp } from './CharityApp';
import { getConfig } from './environment';

new CharityApp(getConfig()).listen().then(({ port }) => {
  console.log(`🚀 Server listening on port: ${port}`);
});
