import { registerPlugin } from '@capacitor/core';

import type { KeyguardManagerPluginPlugin } from './definitions';

const KeyguardManagerPlugin = registerPlugin<KeyguardManagerPluginPlugin>(
  'KeyguardManagerPlugin',
  {
    web: () => import('./web').then(m => new m.KeyguardManagerPluginWeb()),
  },
);

export * from './definitions';
export { KeyguardManagerPlugin };
