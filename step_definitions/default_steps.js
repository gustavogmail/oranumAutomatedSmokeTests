const { I } = inject();

Before((test) => {
  test.retries(3);
});

Given('I am on the Home Page', () => {
  I.amOnPage('/');
  I.wait(3)
});