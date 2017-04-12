import { AngularSportsStorePage } from './app.po';

describe('angular-sports-store App', () => {
  let page: AngularSportsStorePage;

  beforeEach(() => {
    page = new AngularSportsStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
