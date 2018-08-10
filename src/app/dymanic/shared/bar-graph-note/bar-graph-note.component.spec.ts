import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphNoteComponent } from './bar-graph-note.component';

describe('BarGraphNoteComponent', () => {
  let component: BarGraphNoteComponent;
  let fixture: ComponentFixture<BarGraphNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGraphNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
