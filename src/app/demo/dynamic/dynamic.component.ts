import {
  Component, ComponentFactoryResolver,
  Injector,
  NgModuleFactoryLoader,
  OnInit,
  SkipSelf,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { NoteComponent } from '../../dymanic/shared/note/note.component';

@Component({
  selector: 'app-dynamic',
  template: `

    <mat-sidenav-container class="example-container">

      <mat-sidenav mode="side" opened>

        <mat-card>
          <a routerLink="/">Home</a>
          <div>
            <button mat-button (click)="addQuoteCmp()">Add Quote</button>
            <button mat-button (click)="addGraph()">Add Graph</button>
            <button mat-button (click)="addNote()">Add Note</button>
          </div>

          <div>
            <!--<mat-form-field>-->

            <textarea [value]="currentComponent?.instance.data.text"
                      (keyup)="update($event.target.value)"
                      [style.background]="bgcolor"></textarea>
            <!--</mat-form-field>-->
          </div>
        </mat-card>

      </mat-sidenav>
      <mat-sidenav-content>

        <div #vc id="content"></div>

      </mat-sidenav-content>
    </mat-sidenav-container>


    <!--<app-text-input></app-text-input>-->
    <!--<app-bar-graph></app-bar-graph>-->
  `,
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc;
  components = [];
  currentComponent;
  quote = {
    text: `
  The same wind blows on us all.
            The difference in arrival is not
            the blowing of the wind,
            but the set of the sail.`,
    name: 'Jim Rohn'
  };

  color = [
    { value: 40, color: 'red' },
    { value: 70, color: 'green' },
    { value: 30, color: 'blue' }
    ];
  bgcolor;

  constructor(
    @SkipSelf() private injector: Injector,
    private loader: NgModuleFactoryLoader,
    private cr: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  addNote() {

    const cmpFactory = this.cr.resolveComponentFactory(NoteComponent);
    const componentRef = cmpFactory.create(this.injector);
    // componentRef.instance.textChange.subscribe(console.log)
    this.vc.insert(componentRef.hostView);
  }
  addGraph() {
    this.loader.load('src/app/plugin2/plugin.module#PluginModule')
      .then((factory) => {
        const componentRef = this.addCmp(factory);
        componentRef.instance.data = [...this.color];

        // const module = factory.create(this.injector);
        // const cmp: NgElement & WithProperties<any> = document.createElement('graph-cmp') as any;
        // this.cmp = cmp;
        //
        // const content = document.getElementById('content');
        // console.log(content)
        // content.appendChild(cmp);
      });
  }

  addQuoteCmp() {
    // this.loader.load('src/app/dymanic/text-input/text-input.module#TextInputModule')
    this.loader.load('src/app/plugin/plugin.module#PluginModule')
      .then((factory) => {
        const componentRef = this.addCmp(factory);
        componentRef.instance.data = { ...this.quote };
      });
  }

  addCmp(factory) {
    const module = factory.create(this.injector);
    const r = module.componentFactoryResolver;

    // const cmpFactory = r.resolveComponentFactory(TextInputComponent);

    const widgets = module.injector.get('widgets');
    const cmpFactory = r.resolveComponentFactory(widgets[0][0].component);

    // create a component and attach it to the view
    const componentRef = cmpFactory.create(this.injector);
    // componentRef.instance.textChange.subscribe(console.log)
    this.vc.insert(componentRef.hostView);
    this.components.push(componentRef);
    componentRef.location.nativeElement.onclick = () => this.currentComponent = componentRef;

    return componentRef;

    // setTimeout(() => {
    //   this.vc.remove(0)
    // }, 3000)
  }

  /* showAsElement(text) {
     // Create element
     const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('text-input') as any;

     // Listen to the close event
     popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

     // Set the message
     popupEl.text = text;

     // Add to the DOM
     document.body.appendChild(popupEl);
   }*/

  update(text) {
    this.currentComponent.instance.data.text = text;
  }

  getColor(color) {
    this.bgcolor = `rgb(${color.map(c => c.value * 255 / 100)})`;
  }

}
