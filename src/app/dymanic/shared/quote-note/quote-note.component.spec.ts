import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteNoteComponent } from './quote-note.component';

describe('QuoteNoteComponent', () => {
  let component: QuoteNoteComponent;
  let fixture: ComponentFixture<QuoteNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
