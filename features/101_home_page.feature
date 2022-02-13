Feature: Home page
  In order to achieve the features priorities
  As a Oranum user
  I want to be able to use the see all the home page sections

  Background:
    Given I am on the Home Page
    And I have accepted the cookies policy

  Scenario Outline: Load the <section>
    Then I want to see the <section> loaded

    Examples:
      | section        |
      | header         |
      | filters        |
      | livePerformers |
      | topModels      |
      | bestFreeVideos |
      | footer         |