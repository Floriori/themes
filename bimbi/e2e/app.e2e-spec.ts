import { BimbiPage } from './app.po';

describe('bimbi App', () => {
  let page: BimbiPage;

  beforeEach(() => {
    page = new BimbiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
