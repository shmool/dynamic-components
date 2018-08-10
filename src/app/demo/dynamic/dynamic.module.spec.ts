import { DynamicModule } from './dynamic.module';

describe('DynamicModule', () => {
  let dynamicModule: DynamicModule;

  beforeEach(() => {
    dynamicModule = new DynamicModule();
  });

  it('should create an instance', () => {
    expect(dynamicModule).toBeTruthy();
  });
});
