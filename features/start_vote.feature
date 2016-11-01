Feature: Start Ballot
  As a developer
  So that I can start working on a story, bugfix or chore
  I would like to initiate an asynchronous ballot to get an estimate of how difficult the story will be

  Scenario:
    Given that I submit the URL 'https://github.com/AgileVentures/AsyncVoter/issues/4'
    Then the bot should return an id of that new ballot
  # Scenario: 5-option-ballet

  # Scenario: 3-option-ballet