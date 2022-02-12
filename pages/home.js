const { I } = inject();

module.exports = {
  locators: {
    menu_hamburguer: '[data-testid=button-header-hamburger]',
    login: '[data-testid=menu-login-button]',
    signup: '[data-testid=menu-join-now-button]',
    love: '[data-testid=Love]',
    clairvoyant: '[data-testid=Clairvoyant]',
    tarot: '[data-testid=Tarot]',
    astrology: '[data-testid=Astrology]',
    dreams: '[data-testid=Dreams]',
    guides: '[data-testid=Guides]',
    family: '[data-testid=Family]',
    accept_cookies: '//*[@id="oranum-home-page"]/div[2]/div[1]/div[8]/div[2]/div/div/div/div/div/div/div/div[1]/button',
    favorites: '#oranum-home-page > div.react-root > div.sc-gGTEWt.dJHeM > div.cbqd0n7.c17ik8nm.c1sqahjd.cal15is.c1mf23xx > header > div > div:nth-child(1) > div:nth-child(1) > a',
  },

  acceptCookiesPolicy() {
    I.click(this.locators.accept_cookies)
  },

  clickFilter(info) {
    I.retry(3).click({css: this.locators[info.toLowerCase()]})
  },

  openSideBar() {
    I.click({ css: this.locators.menu_hamburguer })
  },

  clickSideBarButton(button) {
    I.wait(2)
    I.click({ css: this.locators[button.toLowerCase()] });
  },

  clickFavorite() {
    I.click(this.locators.favorites)
  }
}
