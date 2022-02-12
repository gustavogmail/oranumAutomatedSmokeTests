Feature: Home Page Filters
  In order to achieve the Features priorities
  As a Oranum user
  I want to be able to use the home page filters
  
  Background:
    Given I am on the Home Page
    And I have accepted the cookies policy

  Scenario: Select the Love filter
    When I select the Love filter
    Then I want to be able to see the Trending Love

  Scenario: Select the Clairvoyant filter
    When I select the Clairvoyant filter
    Then I want to be able to see the Trending Clairvoyant

  Scenario: Select the Tarot filter
    When I select the Tarot filter
    Then I want to be able to see the Trending Tarot

  Scenario: Select the Astrology filter
    When I select the Astrology filter
    Then I want to be able to see the Trending Astrology

  Scenario: Select the Dreams filter
    When I select the Dreams filter
    Then I want to be able to see the Trending Dreams

  Scenario: Select the Guides filter
    When I select the Guides filter
    Then I want to be able to see the Trending Guides

  Scenario: Select the Family filter
    When I select the Family filter
    Then I want to be able to see the Trending Family