const { I } = inject();

module.exports = {
  locators: {
    first_card: '//*[@id="is-search"]/div[2]/div[1]/section/div/div/div[2]/div[1]/div/a[1]/article/div',
  },

  openLivestream() {
    I.click(this.locators.first_card);
  },
}
