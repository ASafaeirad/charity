import 'reflect-metadata';

import { CharityApp } from './CharityApp';
import { getConfig } from './environment';

new CharityApp(getConfig()).listen();
