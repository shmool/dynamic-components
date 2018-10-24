import {
  Component,
  ComponentFactoryResolver,
  Injector,
  NgModuleFactoryLoader,
  OnInit,
  SkipSelf,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <mat-sidenav-container class="sidenav-container">

      <mat-sidenav mode="side" opened>

        <mat-card>
          <div *ngFor="let widget of widgets">
            <button mat-button (click)="addWidget(widget)">{{ widget.name }}</button>
          </div>
        </mat-card>

      </mat-sidenav>
      <mat-sidenav-content>

        <div #vc id="content"></div>

      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc;

  widgets = [
    { name: 'quote-note', path: 'src/app/plugin/plugin.module#PluginModule' },
    { name: 'graph-note', path: 'src/app/plugin2/plugin.module#PluginModule' }
  ];

  constructor(
    @SkipSelf() private injector: Injector,
    private loader: NgModuleFactoryLoader) {
  }

  ngOnInit() {
  }

  addWidget(widget) {
    this.loader.load(widget.path)
      .then((factory) => {
        const module = factory.create(this.injector);
        const r = module.componentFactoryResolver;

        const widgets = module.injector.get('widgets');
        const cmpFactory = r.resolveComponentFactory(widgets[0][0].component);

        const componentRef = cmpFactory.create(this.injector);
        this.vc.insert(componentRef.hostView);
      });

  }
}
