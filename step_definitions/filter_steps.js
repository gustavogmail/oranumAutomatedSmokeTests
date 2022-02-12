const { I, homePage } = inject();

When('I select the {word} filter', (info) => {
  homePage.clickFilter(info)
})

Then('I want to be able to see the Trending {word}', (info) => {
  I.waitForText('Explore trending ' + info +  ' expert content!', 10);
})
