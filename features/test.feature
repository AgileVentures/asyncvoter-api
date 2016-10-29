Feature: Test! Raphael, Adrian and Junior experimenting.
    Test example to check posting a story works

Scenario: Posting a Story
    Given The json request data
    """json
    {
        url: 'https://github.com/AgileVentures/AsyncVoter/issues/4',
        size: '3',
        name: 'Start Vote Feature'
    }
    """
    When I make a POST request to "http://localhost:3000/stories"
    Then the response status code should be "200"
