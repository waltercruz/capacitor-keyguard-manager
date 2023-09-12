export interface KeyguardManagerPluginPlugin {
  isDeviceSecure(): Promise<{value: boolean}>;
}
