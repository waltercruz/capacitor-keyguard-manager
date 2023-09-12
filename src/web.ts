import { WebPlugin } from '@capacitor/core';

import type { KeyguardManagerPluginPlugin } from './definitions';

export class KeyguardManagerPluginWeb
  extends WebPlugin
  implements KeyguardManagerPluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
