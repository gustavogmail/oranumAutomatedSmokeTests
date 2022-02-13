const { I, homePage, loginModalPage, signUpModalPage } = inject();

Given('I click in the {word} sidebar button', (button) => {
  homePage.openSideBar();
  homePage.clickSideBarButton(button);
});

When('I fill the Username field in {word} form', (form) => {
  form === 'login'
    ? loginModalPage.fillWrongUsername()
    : signUpModalPage.fillWrongUsername();
});

When('I let the {word} field empty', (field) => {
  loginModalPage.letFieldEmpty(field);
});

When('I try to signup with all fields empty', () => {
  signUpModalPage.clickJoinNowButton();
});

When('I fill the {word} field with an invalid {word}', (field) => {
  field === 'email'
    ? signUpModalPage.fillWrongEmail()
    : signUpModalPage.fillWrongPassword();
});

Then('I want to be able to see the {word} form', (modal) => {
  modal === 'login' 
    ? loginModalPage.checkLoginModalExists()
    : signUpModalPage.checkSignUpModalExists();
});

Then('I want to see the minimal characters validation error message on {word} form', (form) => {
  form === 'login'
    ? loginModalPage.checkUsernameErrorMessage()
    : signUpModalPage.checkUsernameErrorMessage();
});

Then('I want to see the required validation error message on {word} form', (form) => {
  form === 'login'
    ? loginModalPage.checkRequiredErrorMessage()
    : signUpModalPage.checkRequiredErrorMessage();
});

Then('I want to see the invalid {word} error message', (field) => {
  field === 'email'
    ? signUpModalPage.checkEmailErrorMessage()
    : signUpModalPage.checkPasswordErrorMessage();
});