const { I, livestreamPage } = inject();

Given('I am on the Live Page', () => {
  I.amOnPage('/search/Live');
});

When('I click to open a livestream', () => {
  livestreamPage.openLivestream();
});

Then('I see the livestream video', () => {
  I.seeInCurrentUrl('/chat')
});
