const constants = require('../config/constants');

const { I } = inject();

module.exports = {
  locators: {
    username: '//*[@id="nick"]',
    email: '//*[@id="email"]',
    password: '//*[@id="password"]',
    join_now_button: '//*[@id="signup-submit"]'
  },

  waitForErrorMessage(message) {
    I.wait(3);
    I.see(message);
  },

  clickJoinNowButton() {
    I.click(this.locators.join_now_button);
  },

  checkRequiredErrorMessage() {
    this.waitForErrorMessage(constants.REQUIRED_VALIDATION_MESSAGE);
  },

  checkUsernameErrorMessage() {
    this.waitForErrorMessage(constants.USERNAME_VALIDATION_MESSAGE);
  },
  
  checkEmailErrorMessage() {
    this.waitForErrorMessage(constants.EMAIL_VALIDATION_MESSAGE);
  },

  checkPasswordErrorMessage() {
    this.waitForErrorMessage(constants.PASSWORD_VALIDATION_MESSAGE);
  },

  checkSignUpModalExists() {
    I.see('Join now!');
    I.see('By clicking on “Join Now”, you agree to our');
    I.see('Are You a Member?');
  },

  fillWrongUsername() {
    I.fillField(this.locators.username, '123');
    I.pressKey('Tab');
  },
  
  fillWrongEmail() {
    I.fillField(this.locators.email, '123');
    I.pressKey('Tab');
  },

  fillWrongPassword() {
    I.fillField(this.locators.password, '123');
    I.pressKey('Tab');
  },
}
