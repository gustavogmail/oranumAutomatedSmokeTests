const { I, homePage, loginModalPage } = inject();

When('I click in the Login button', () => {
  homePage.openSideBar();
  homePage.clickLoginButton();
})

Then('I want to be able to accept the cookies policy', () => {
  homePage.acceptCookiesPolicy()
})

Then('I want to be able to fill the login form', () => {
  loginModalPage.checkLoginModalExists()
})