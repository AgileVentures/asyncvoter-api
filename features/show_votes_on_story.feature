@Features
Feature: Show votes on story
  As a developer
  So that I can get an update on a story that I care about
  I want to see the votes cast on a story

  @Scenarios
  Scenario: List all votes on a story
    Given the following stories exists:
      | name                                | size | url                                                    | _id                                   |
      | Show story votes on story           | 2    | https://github.com/AgileVentures/AsyncVoter/issues/56  | ObjectId("582b571cb7c640cc093dae5e")  |
      | Only active stories may be voted on | 0    | https://github.com/AgileVentures/AsyncVoter/issues/63  | ObjectId("582c9c8d0577b51e23a965c7")  |
    And the following votes exist:
      | story                                | size | _id                                  |
      | ObjectId("582b571cb7c640cc093dae5e") | 2    | ObjectId("582b41c882d90224943c81dc") |
      | ObjectId("582b571cb7c640cc093dae5e") | 2    | ObjectId("582b41eda948551528052546") |
      | ObjectId("582b571cb7c640cc093dae5e") | 2    | ObjectId("582b59d3b7c640cc093dae5f") |
    When the client requests a list of votes on "Show story votes on story " story
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

  Scenario: Return empty list for stories with no votes
    Given the following stories exists:
      | name                                | size | url                                                    | _id                                   |
      | Show story votes on story           | 2    | https://github.com/AgileVentures/AsyncVoter/issues/56  | ObjectId("582b571cb7c640cc093dae5e")  |
      | Only active stories may be voted on | 0    | https://github.com/AgileVentures/AsyncVoter/issues/63  | ObjectId("582c9c8d0577b51e23a965c7")  |
    And the following votes exist:
      | story                                | size | _id                                  |
      | ObjectId("582b571cb7c640cc093dae5e") | 2    | ObjectId("582b41c882d90224943c81dc") |
      | ObjectId("582b571cb7c640cc093dae5e") | 2    | ObjectId("582b41eda948551528052546") |
      | ObjectId("582b571cb7c640cc093dae5e") | 2    | ObjectId("582b59d3b7c640cc093dae5f") |
    When the client requests a list of votes on "Only active stories may be voted on " story
    Then the response should be a an empty list
