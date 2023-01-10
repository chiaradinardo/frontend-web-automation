Feature: Creating a new user

  @signUp
  Scenario: User can register a new user.
  	Given browser is open
    And user goes to 'https://www.demoblaze.com/index.html'
    When user clicks on 'Sign up' link
    And user completes 'sign-username' field with 'baufest_automation'
    And user completes 'sign-password' field with 'mypsw123'
    And clicks on 'Sign up' button
    Then a successful alert is shown with a message 'Sign up successful.'
