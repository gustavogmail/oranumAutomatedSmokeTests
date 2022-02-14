const { I, searchPage, homePage } = inject();

Given('I am on the Search Page', () => {
  I.amOnPage('/search/Live');
  I.wait(3);
});

When('I click the filter sign', () => {
  homePage.clickSearch();
});

When('I fill the search field with my favorite Psychic', () => {
  searchPage.fillSearchInput();
});

Then('I want to see the filter page', () => {
  searchPage.checkSearchSection();
});

Then('I see the filter result', () => {
  searchPage.checkFilterResult();
});