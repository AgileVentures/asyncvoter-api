@Features
Feature: Show votes on story
  As a developer
  So that I can get an update on a story that I care about
  I want to see the votes cast on a story

  Scenario: List all votes on a story
    Given there is a story with votes
    When the client requests a list of votes
    Then the response should be a list of votes on that story

#  Scenario: Return empty list for stories with no votes
#    Given there is a story with no votes
#    When the client requests a list of votes
#    Then the response should be a an empty list
