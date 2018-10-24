import { QuoteNoteModule } from './quote-note.module';

describe('QuoteNoteModule', () => {
  let quoteNoteModule: QuoteNoteModule;

  beforeEach(() => {
    quoteNoteModule = new QuoteNoteModule();
  });

  it('should create an instance', () => {
    expect(quoteNoteModule).toBeTruthy();
  });
});
