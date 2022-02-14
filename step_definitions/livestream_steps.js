const { I, livestreamPage } = inject();

Given('I am on the Live Page', () => {
  I.amOnPage('/search/Live');
});

Given('I am on a Psychic profile', () =>{
  I.amOnPage('/profile/LinaOldman');
});

When('I click to open a livestream', () => {
  livestreamPage.openLivestream();
});

When('I click in watch me video', () => {
  livestreamPage.clickInWatchMe();
});

Then('I see the profile page {word}', (section) => {
  switch (section) {
		case 'creators-screen':
			livestreamPage.checkCreatoresScreenSection();
			break;
		case 'creators-screen-content':
			livestreamPage.checkCreatoresScreenContentSection();
			break;
    case 'creators-screen-content':
      livestreamPage.checkInfluencerNameSection();
      break;
    case 'resume-description':
      livestreamPage.checkResumeSection();
      break;
    case 'buttons':
      livestreamPage.checkProfileButtons();
      break;
  }
});

Then('I see the livestream video', () => {
  livestreamPage.checkChatUrl();
});
