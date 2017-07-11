import { AvisosuppPage } from './app.po';

describe('avisosupp App', () => {
  let page: AvisosuppPage;

  beforeEach(() => {
    page = new AvisosuppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
