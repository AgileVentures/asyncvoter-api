Feature: Start Ballot
  As a developer
  So that I can start working on a story, bugfix or chore
  I would like to initiate an asynchronous ballot to get an estimate of how difficult the story will be

  Scenario:
    Given that I submit the URL 'https://github.com/AgileVentures/AsyncVoter/issues/4'
    Then the bot should return an id of that new ballot
    When I retrieve the stories that are currently being voted
    Then I should get 1 stories
    And I should get the first story with 'url' 'https://github.com/AgileVentures/AsyncVoter/issues/4'
    And I should get the first story with 'source' 'https://agileventures.slack.com/messages/C0KK907B5/'
    And I should get the first story with 'userId' 'slack_user'

  # Scenario: 5-option-ballet

  # Scenario: 3-option-ballet
