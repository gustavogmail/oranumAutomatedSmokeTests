const { I } = inject();

module.exports = {
  locators: {
    username: '#username'
  },

  checkLoginModalExists() {
    I.see('Welcome to')
  }
}
