const { I, homePage } = inject();

Then('I want to see the {word} loaded', (section) => {
	switch (section) {
		case 'header':
			homePage.checkHeaderSection();
			break;
		case 'filters':
			homePage.checkFiltersSection();
			break;
		case 'livePerformers':
			homePage.checkLivePerformersSection();
			break;
		case 'topModels':
			homePage.checkTopModelsSection();
			break;
		case 'bestFreeVideos':
			homePage.checkTopModelsSection();
			break;
		case 'footer':
			homePage.checkFooterSection();
			break;
	}
});