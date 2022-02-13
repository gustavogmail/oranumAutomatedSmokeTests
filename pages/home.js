const constants = require('../config/constants');

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
    favorites: '[data-testid=button-header-favorite]',
    search: '[data-testid=button-header-search]',
    awards: '[data-testid=button-header-awards]',
    live_performes: '[data-testid=live-performers-section]',
    call_available: '[data-testid=call-available-section]',
    top_models: '[data-testid=homepage-top-models]',
    best_free_videos: '[data-testid=home-best-free-videos]',
    messenger: '[data-testid=button-header-messenger]',
    accept_cookies: '//*[@id="oranum-home-page"]/div[2]/div[1]/div[8]/div[2]/div/div/div/div/div/div/div/div[1]/button',
  },

  acceptCookiesPolicy() {
    I.click(this.locators.accept_cookies)
  },

  clickFilter(info) {
    I.retry(3).click({css: this.locators[info.toLowerCase()]})
  },

  openSideBar() {
    I.click({ css: this.locators.menu_hamburguer })
    I.wait(2);
  },

  clickSideBarButton(button) {
    I.click({ css: this.locators[button] });
    I.wait(2);
  },

  clickFavorite() {
    I.click(this.locators.favorites)
  },

  checkHeaderSection() {
    I.seeElement(this.locators.favorites);
    I.seeElement(this.locators.search);
    I.seeElement(this.locators.awards);
    I.seeElement(this.locators.messenger);
    I.seeElement(this.locators.menu_hamburguer);
  },

  checkFiltersSection() {
    I.seeElement(this.locators.love);
    I.seeElement(this.locators.clairvoyant);
    I.seeElement(this.locators.tarot);
    I.seeElement(this.locators.astrology);
    I.seeElement(this.locators.dreams);
    I.seeElement(this.locators.guides);
    I.seeElement(this.locators.family);
  },

  checkLivePerformersSection() {
    I.seeElement(this.locators.live_performes);
  },

  checkTopModelsSection() {
    I.seeElement(this.locators.top_models);
  },

  checkBestFreeVideosSection() {
    I.seeElement(this.locators.best_free_videos);
  },

  checkFooterSection() {
    I.scrollPageToBottom();
    I.see(constants.FOOTER_SECTION_TEXT);
  },
}
