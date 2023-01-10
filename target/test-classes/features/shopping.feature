Feature: Shopping functionality

  Scenario: Add a laptop to cart
    Given browser is open
    And user goes to 'https://www.demoblaze.com/index.html'
    When user clicks on 'Laptops' link
    And user clicks on 'MacBook air' link
    And user clicks on 'Add to cart' link
    Then a successful alert is shown with a message 'Product added'