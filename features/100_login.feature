Feature: Login
  In order to achieve the Features priorities
  As a Oranum user
  I want to be able to log in the application

  Scenario: Accept the cookies policy
    Given I am on the Home Page
    Then I want to be able to accept the cookies policy
  
  Scenario: Fill the login form
    Given I am on the Home Page
    When I click in the Login button
    Then I want to be able to fill the login form