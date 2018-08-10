import { PluginModule } from './plugin.module';

describe('PluginModule', () => {
  let pluginModule: PluginModule;

  beforeEach(() => {
    pluginModule = new PluginModule();
  });

  it('should create an instance', () => {
    expect(pluginModule).toBeTruthy();
  });
});
