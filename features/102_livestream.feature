Feature: Psychic page / Livestream
  In order to achieve the Features priorities
  As a Oranum user
  I want to be able to see the Psychic profile

  Scenario Outline: Load the Psychic profile sections
    Given I am on a Psychic profile
    Then I see the profile page <section>

    Examples:
      | section                 |
      | creators-screen         |
      | creators-screen-content |
      | influencer-name-text    |
      | resume-description      |
      | buttons                 |

  Scenario: Open livestream video
    Given I am on the Live Page
    When I click to open a livestream
    Then I see the livestream video