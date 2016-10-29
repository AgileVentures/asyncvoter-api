Feature: Test! Raphael, Adrian and Junior experimenting.
    Test example to check posting a story works

Scenario: Testing Cucumber
    When I make a GET request to "http://localhost:3000/stories"
    Then the response status code should be "200"



