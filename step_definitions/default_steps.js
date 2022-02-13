const { I, homePage } = inject();

Before((test) => {
  test.retries(3);
});

Given('I am on the Home Page', () => {
  I.amOnPage('/home');
  I.wait(3);
});

Given('I have accepted the cookies policy', () => {
  homePage.acceptCookiesPolicy();
});

Given('I have accepted the cookies policyss', () => {
  I.amOnPage('/home');
  homePage.acceptCookiesPolicy()
});