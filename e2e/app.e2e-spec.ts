import { AngularTutoPage } from './app.po';

describe('angular-tuto App', function() {
  let page: AngularTutoPage;

  beforeEach(() => {
    page = new AngularTutoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
