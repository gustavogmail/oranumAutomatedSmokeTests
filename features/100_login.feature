Feature: Login
  In order to achieve the features priorities
  As a Oranum user
  I want to be able to use the login modal
  
  Background:
    Given I am on the Home Page
    And I have accepted the cookies policy
  
  Scenario: Show the login form
    Given I click in the Login button
    Then I want to be able to see the login form

  Scenario: Check required validation for Username field
    Given I click in the Login button
    When I let the username field empty
    Then I want to see the required validation error message

  Scenario: Check required validation for Password field
    Given I click in the Login button
    When I let the password field empty
    Then I want to see the required validation error message

  Scenario: Check the minimum number of characters validation for the Username field
    Given I click in the Login button
    When I fill the Username field with 123
    Then I want to see the validation error message