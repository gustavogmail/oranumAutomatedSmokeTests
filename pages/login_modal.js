const constants = require('../config/constants');

const { I } = inject();

module.exports = {
  locators: {
    username: '//*[@id="username"]',
    password: '//*[@id="password"]',
    invalid_message: '//*[@id="login-modal"]/div/div[1]/form/div[3]'
  },

  waitForErrorMessage(message) {
    I.wait(3);
    I.see(message);
  },

  checkRequiredErrorMessage() {
    this.waitForErrorMessage(constants.REQUIRED_VALIDATION_MESSAGE);
  },

  checkUsernameErrorMessage() {
    this.waitForErrorMessage(constants.USERNAME_VALIDATION_MESSAGE);
  },

  checkLoginModalExists() {
    I.see('Welcome to');
    I.see('Keep me logged in');
    I.see("Don't have an account?");
    I.see("Forgot password?");
  },

  fillWrongUsername() {
    I.fillField(this.locators.username, '123');
    I.pressKey('Enter');
  },

  letFieldEmpty(field) {
    I.fillField(this.locators[field], 'a');
    I.pressKey('Backspace');
    I.pressKey('Tab');
  },
}
