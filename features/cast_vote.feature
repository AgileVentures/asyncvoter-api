# TODO: Fix the formatting of this file
# Indentation should match: https://github.com/cucumber/cucumber/wiki/Gherkin

Feature: Cast vote
As a developer
So that I can indicate my thoughts about a story
I want to cast my vote on the story


Scenario: Casting a 1
Given I cast a vote on "https://github.com/AgileVentures/AsyncVoter/issues/7"
When I select a 1
Then I should get a response back
And the response should include the issue being voted on
And that 1 was selected


Scenario: Casting a 3
Given I cast a vote on "https://github.com/AgileVentures/AsyncVoter/issues/7"
When I select a 3
Then I should get a response back
And the response should include the issue being voted on
And that 3 was selected


Scenario: Forgetting to specify vote option
Given I cast a vote on "https://github.com/AgileVentures/AsyncVoter/issues/7"
When I forget to specify the vote
Then I should get an error back


