import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLogoComponent } from './angular-logo.component';

describe('AngularLogoComponent', () => {
  let component: AngularLogoComponent;
  let fixture: ComponentFixture<AngularLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
