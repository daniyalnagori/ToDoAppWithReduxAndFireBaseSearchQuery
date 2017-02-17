import { RxjsPracticePage } from './app.po';

describe('rxjs-practice App', function() {
  let page: RxjsPracticePage;

  beforeEach(() => {
    page = new RxjsPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
