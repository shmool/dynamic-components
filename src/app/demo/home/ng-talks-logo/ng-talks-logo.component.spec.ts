import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTalksLogoComponent } from './ng-talks-logo.component';

describe('NgTalksLogoComponent', () => {
  let component: NgTalksLogoComponent;
  let fixture: ComponentFixture<NgTalksLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTalksLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTalksLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
