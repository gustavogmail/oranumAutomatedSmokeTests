Feature: Psychic page / Livestream @current

  Background:
    Given I have accepted the cookies policyss

  Scenario: Open livestream video
    Given I am on the Live Page
    When I click to open a livestream
    Then I see the livestream video

