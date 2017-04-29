import { MaterialSeed2Page } from './app.po';

describe('material-seed2 App', () => {
  let page: MaterialSeed2Page;

  beforeEach(() => {
    page = new MaterialSeed2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
