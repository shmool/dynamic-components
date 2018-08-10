import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginComponent } from './plugin.component';
import { SharedModule } from '../dymanic/shared/shared.module';
import { MatCardModule, MatInputModule } from '@angular/material';
import { createCustomElement } from '@angular/elements';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    MatCardModule
  ],
  bootstrap: [],
  declarations: [
    PluginComponent
  ],
  entryComponents: [PluginComponent],
  providers: [
    {
      provide: 'widgets',
      useValue: [
        {
          name: 'graph-cmp',
          component: PluginComponent
        }
      ],
      multi: true
    }
  ]
})
export class PluginModule {

  // constructor(private injector: Injector) {
  //   const externalTileCE = createCustomElement(PluginComponent, { injector: this.injector });
  //   customElements.define('graph-cmp', PluginComponent);
  //   console.log('bootstrap', externalTileCE)
  // }

  ngDoBootstrap() {

  }

}
