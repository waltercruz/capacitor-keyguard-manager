import { WebPlugin } from '@capacitor/core';

import type { KeyguardManagerPluginPlugin } from './definitions';

export class KeyguardManagerPluginWeb
  extends WebPlugin
  implements KeyguardManagerPluginPlugin
{
  async isDeviceSecure(): Promise<{ value: boolean }> {
    return { value: false };
  }
}
