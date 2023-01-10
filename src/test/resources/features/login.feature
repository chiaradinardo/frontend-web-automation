Feature: Log in

  @logIn
  Scenario Outline: User can login on website
    Given browser is open
    And user goes to 'https://www.demoblaze.com/index.html'
    When user clicks on 'Log in' link
    And user completes 'loginusername' field with '<user>'
    And user completes 'loginpassword' field with 'mypsw123'
    And clicks on 'Log in' button
    Then a welcome for '<user>' is shown
    Examples:
    | user    |
    | baufest |

    @logOut
    Scenario: User can login on website
      Given browser is open
      And user goes to 'https://www.demoblaze.com/index.html'
      And user clicks on 'Log in' link
      And user completes 'loginusername' field with 'baufest'
      And user completes 'loginpassword' field with 'mypsw123'
      And clicks on 'Log in' button
      When user clicks on 'Log out' link
      Then 'Log in' link is shown
      And 'Sign in' link is shown
