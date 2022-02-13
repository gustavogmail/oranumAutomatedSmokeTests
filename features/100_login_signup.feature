Feature: Login / Signup
  In order to achieve the features priorities
  As a Oranum user
  I want to be able to use the login and signup modals
  
  Scenario: Accept the cookies policy
    Given I am on the Home Page
    And I have accepted the cookies policy
  
  Scenario Outline: Show the <form>
    Given I am on the Home Page
    And I click in the <form> sidebar button
    Then I want to be able to see the <form> form

    Examples:
      | form   |
      | login  |
      | signup |

  Scenario Outline: Check required validation for <field> in login form
    Given I am on the Home Page
    And I click in the login sidebar button
    When I let the <field> field empty
    Then I want to see the required validation error message on <form> form

    Examples:
      | field    | form   |
      | username | login  |
      | password | login  |

  Scenario: Check required validation for Username field in Signup form
    Given I am on the Home Page
    And I click in the signup sidebar button
    When I try to signup with all fields empty
    Then I want to see the required validation error message on signup form

  Scenario Outline: Check valid <field> validation
    Given I am on the Home Page
    And I click in the signup sidebar button
    When I fill the <field> field with an invalid <field>
    Then I want to see the invalid <field> error message

    Examples:
      | field    |
      | email    |
      | password |

  Scenario: Check valid password validation
    Given I am on the Home Page
    And I click in the signup sidebar button
    When I fill the password field with an invalid password
    Then I want to see the invalid password error message

  Scenario Outline: Check the minimum number of characters validation for the Username field in <form> form
    Given I am on the Home Page
    And I click in the <form> sidebar button
    When I fill the Username field in <form> form
    Then I want to see the minimal characters validation error message on <form> form

    Examples:
     | form   |
     | login  |
     | signup |