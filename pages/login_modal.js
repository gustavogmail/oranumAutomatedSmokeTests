const { I } = inject();

module.exports = {
  locators: {
    username: '//*[@id="username"]',
    password: '//*[@id="password"]',
    login_button: '//*[@id="login-submit"]',
    invalid_message: '//*[@id="login-modal"]/div/div[1]/form/div[3]'
  },

  checkLoginModalExists() {
    I.see('Welcome to');
    I.see('Keep me logged in');
    I.see("Don't have an account?");
    I.see("Forgot password?");
  },

  toFillUsername(username) {
    I.fillField(this.locators.username, username);
    I.pressKey('Enter');
  },

  letFieldEmpty(field) {
    I.fillField(this.locators[field], 'a');
    I.pressKey('Backspace');
    I.pressKey('Tab');
  },

  checkValidationErrorMessage(message) {
    I.wait(3);
    I.see(message);
  }
}
