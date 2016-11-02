Feature: List all Ongoing Votes
  As a developer
    In order to cast my vote and see the status of the project
    I want the ability to check what stories are currently being voted on
  Background:
    Given the following votes exist:
      | name   | size | url                                                  |
      | vote 1 |    0 | https://github.com/AgileVentures/AsyncVoter/issues/4 |
      | vote 2 |    1 | https://github.com/AgileVentures/AsyncVoter/issues/5 |
      | vote 3 |    2 | https://github.com/AgileVentures/AsyncVoter/issues/6 |
      | vote 4 |    3 | https://github.com/AgileVentures/AsyncVoter/issues/7 |
  Scenario:
    Given I retrieve the stories that are currently being voted
    Then I should get 1 story
    And I should get the story with 'name' 'vote 1'
    And I should get the story with 'size' '0'
    And I should get the story with 'url' 'https://github.com/AgileVentures/AsyncVoter/issues/4'