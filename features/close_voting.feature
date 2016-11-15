Feature: Closing voting
  As an admin
  So that work can start on a story
  I want to be able to set a size on that story

Scenario: Closing with a 2
  Given there is a story with name "test me" and URL of "https://github.com/AgileVentures/AsyncVoter/issues/8"
  When I send the story a size of 2
  Then I should get the story back with size 2