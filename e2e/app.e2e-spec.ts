import { DevfestAngular2WorkshopPage } from './app.po';

describe('devfest-angular2-workshop App', function() {
  let page: DevfestAngular2WorkshopPage;

  beforeEach(() => {
    page = new DevfestAngular2WorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
