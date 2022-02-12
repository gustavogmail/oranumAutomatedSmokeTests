const { I, homePage } = inject();

Before((test) => {
  test.retries(3);
});

Given('I am on the Home Page', () => {
  I.amOnPage('/');
});

Given('I have accepted the cookies policy', () => {
  homePage.acceptCookiesPolicy()
});

Given('I click in the {word} button', (button) => {
  homePage.openSideBar();
  homePage.clickSideBarButton(button);
});