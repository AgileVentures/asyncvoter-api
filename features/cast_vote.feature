Feature: Cast vote
As a developer
So that I can indicate my thoughts about a story
I want to cast my vote on the story and provide some notes


# TODO: Casting an 8 on a 3-option set vote?
# Should this be disallowed?

# TODO: Include notes with linebreaks in them

Scenario: Casting a 5
Given I cast a vote on "https://github.com/AgileVentures/AsyncVoter/issues/7"
And I am identified by "Raphael Krausz"
When I select a 5
Then I should get a response back
And the response should include the issue being voted on
And that 5 was selected


Scenario: Casting a 5 with notes
Given I cast a vote on "https://github.com/AgileVentures/AsyncVoter/issues/7"
And I am identified by "Raphael Krausz"
When I select a 5
And I give the following notes "Hammock sartorial craft beer, fap helvetica williamsburg live-edge selfies DIY. Deep v vegan stumptown, food truck chillwave lomo raw denim 3 wolf moon you probably haven't heard of them street art woke. You probably haven't heard of them fap 90's enamel pin, ennui cronut prism. Kombucha selfies try-hard, vexillologist sustainable photo booth occupy freegan humblebrag succulents. Chillwave pork belly chia, cornhole paleo distillery coloring book portland godard forage. Viral lomo flannel chicharrones, franzen single-origin coffee man bun polaroid keytar occupy neutra. Pork belly messenger bag vexillologist, fingerstache vice cray prism."
Then I should get a response back
And the response should include the same notes back
And the response should include the issue being voted on
And that 5 was selected



Scenario: Casting a 3
Given I cast a vote on "https://github.com/AgileVentures/AsyncVoter/issues/7"
And I am identified by "Raphael Krausz"
When I select a 3
Then I should get a response back
And the response should include the issue being voted on
And that 3 was selected


Scenario: Casting a 3 with notes
Given I cast a vote on "https://github.com/AgileVentures/AsyncVoter/issues/7"
And I am identified by "Raphael Krausz"
When I select a 3
And I give the following notes "Shabby chic beard craft beer, portland retro jean shorts glossier viral next level bicycle rights kogi pickled keffiyeh intelligentsia. Brunch next level swag, try-hard kitsch chia single-origin coffee disrupt fanny pack tote bag. Tilde tbh fashion axe mustache flannel. Wolf bushwick cardigan venmo brunch literally. Irony williamsburg tumeric copper mug iPhone ethical. Franzen chambray wayfarers intelligentsia, hella cornhole tacos church-key sustainable art party banh mi iPhone 3 wolf moon. Ennui distillery small batch, whatever art party austin VHS mumblecore."
Then I should get a response back
And the response should include the issue being voted on
And that 3 was selected
And the response should include the same notes back


Scenario: Forgetting to specify vote option
Given I cast a vote on "https://github.com/AgileVentures/AsyncVoter/issues/7"
And I am identified by "Raphael Krausz"
When I forget to specify the vote
Then I should get an error back


# POST /stories/:storyId/votes ...
# POST/stories//votes - TODO

# Scenario: Forgetting to specify issue to vote on
# Given I cast a vote on "https://github.com/AgileVentures/AsyncVoter/issues/7"
# And forget to specify the issue
# And I am identified by "Raphael Krausz"
# And I select a 1
# Then I should get an error back


Scenario: Forgetting to identify myself
Given I cast a vote on "https://github.com/AgileVentures/AsyncVoter/issues/7"
And I forget give the identity of the developer
And I select a 2
Then I should get an error back

