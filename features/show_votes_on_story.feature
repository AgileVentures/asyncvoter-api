@tag1
Feature: Show votes on story
  As a developer
  So that I can get an update on a story that I care about
  I want to see the votes cast on a story

  @tag2
  Scenario: List all votes on a story
    Given the following story exists:
      | name                      | size | url                                                    |
      | Show story votes on story | 2    | https://github.com/AgileVentures/AsyncVoter/issues/56  |
    When the client requests a list of votes on this story
    And the story _id is ObjectId("582b571cb7c640cc093dae5e")
    Then the response should be a list of 3 votes
    And I should get the first vote with the following attributes:
      | attribute | type     | value                                |
      | _id       | ObjectId | ObjectId("582b41c882d90224943c81dc") |
      | story     | ObjectId | ObjectId("582b571cb7c640cc093dae5e") |
      | size      | String   | 2                                    |
    And I should get the second vote with the following attributes:
      | attribute | type     | value                                |
      | _id       | ObjectId | ObjectId("582b41eda948551528052546") |
      | story     | ObjectId | ObjectId("582b571cb7c640cc093dae5e") |
      | size      | String   | 2                                    |
    And I should get the third vote with the following attributes:
      | attribute | type     | value                                |
      | _id       | ObjectId | ObjectId("582b59d3b7c640cc093dae5f") |
      | story     | ObjectId | ObjectId("582b571cb7c640cc093dae5e") |
      | size      | String   | 2                                    |
    And They should all belong to same story
