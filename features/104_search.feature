Feature: Search
  In order to achieve the Features priorities
  As a Oranum user
  I want to be able to use the search feature
	
	Scenario: Click filter sign
		Given I am on the Home Page
		When I click the filter sign
		Then I want to see the filter page

	Scenario: Search for a specific Psychic
		Given I am on the Search Page
		When I fill the search field with my favorite Psychic
		Then I see the filter result