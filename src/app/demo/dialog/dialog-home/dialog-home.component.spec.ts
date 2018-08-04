import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHomeComponent } from './dialog-home.component';

describe('DialogHomeComponent', () => {
  let component: DialogHomeComponent;
  let fixture: ComponentFixture<DialogHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
