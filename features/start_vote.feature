Feature: Start Ballot
  As a developer
    So that I can start working on a story, bugfix or chore
    I would like to initiate an asynchronous ballot to get an estimate of how difficult the story will be

  Scenario:
    Given that I submit a new story to the bot
    Then the bot should return an id of that new ballot
