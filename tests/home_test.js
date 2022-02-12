Feature('home');

Scenario('Open Menu bar', ({ I, homePage }) => {
  I.amOnPage('/');
  homePage.openSideBar();
  I.see('JOIN NOW');
});

Scenario('Click favorite', ({ I, homePage }) => {
  I.amOnPage('/');
  homePage.clickFavorite();
  I.see('EXPLORE MORE');
});
