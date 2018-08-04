import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliWikiComponent } from './cli-wiki.component';

describe('CliWikiComponent', () => {
  let component: CliWikiComponent;
  let fixture: ComponentFixture<CliWikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliWikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
