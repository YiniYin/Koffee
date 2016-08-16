import { KoffeePage } from './app.po';

describe('koffee App', function() {
  let page: KoffeePage;

  beforeEach(() => {
    page = new KoffeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
