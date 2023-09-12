export interface KeyguardManagerPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
