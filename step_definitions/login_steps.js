const { I, homePage, loginModalPage } = inject();

Given('I click in the Login button', () => {
  homePage.openSideBar();
  homePage.clickLoginButton();
});

When('I fill the Username field with {word}', (username) => {
  loginModalPage.toFillUsername(username);
});

When('I let the {word} field empty', (field) => {
  loginModalPage.letFieldEmpty(field);
});

Then('I want to be able to accept the cookies policy', () => {
  homePage.acceptCookiesPolicy()
});

Then('I want to be able to see the login form', () => {
  loginModalPage.checkLoginModalExists()
});

Then('I want to see the validation error message', () => {
  loginModalPage.checkValidationErrorMessage('The username must be at least 6 characters long.');
});

Then('I want to see the required validation error message', () => {
  loginModalPage.checkValidationErrorMessage('The field is required!');
});