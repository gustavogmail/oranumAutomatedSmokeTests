Feature: Home Page Filters
  In order to achieve the Features priorities
  As a Oranum user
  I want to be able to use the home page filters
  
  Background:
    Given I am on the Home Page
    And I have accepted the cookies policy

  Scenario Outline: Select the filters
    When I select the <Filter>
    Then I want to be able to see the Trending <Trending>

    Examples:
      | Filter      | Trending    |
      | Love        | Love        |
      | Clairvoyant | Clairvoyant |
      | Tarot       | Tarot       |
      | Astrology   | Astrology   |
      | Dreams      | Dreams      |
      | Guides      | Guides      |
      | Family      | Family      |