const { I } = inject();

module.exports = {
  locators: {
    search_input: '#downshift-0-input',
    search_filters: '[data-testid=search-filters]',
    filter_input: '[data-testid=filter-text]',
    search_result_list: '[data-testid=search-result-list]',
  },

  checkSearchSection() {
    I.seeElement(this.locators.search_filters);
  },

  fillSearchInput() {
    I.fillField(this.locators.search_input, 'Lina');
    I.wait(3);
  },

  checkFilterResult() {
    I.seeElement(this.locators.search_result_list);
  }
}