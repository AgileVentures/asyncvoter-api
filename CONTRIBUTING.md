We use [Waffle](https://waffle.io/AgileVentures/AsyncVoter) to manage our work on features, chores and bugfixes. See the [Recommended-Workflow-Using-Pull-Requests-&-Automatic-Work-Tracking](https://github.com/waffleio/waffle.io/wiki/Recommended-Workflow-Using-Pull-Requests-&-Automatic-Work-Tracking) for more details on the Waffle workflow.

To start working on a ticket please check that it has been estimated in waffle.  If not please feel free to start a vote on the story in the [async_voter slack channel](https://agileventures.slack.com/messages/async_voter/). See the [instructions for running an asynchronous vote](https://github.com/AgileVentures/AgileVentures/blob/master/ASYNC_VOTING.md), and feel free to join a hangout scrum in order to vote synchronously if you prefer.  Scrum times on the [AgileVentures About Us](http://www.agileventures.org/about-us) page.

Once a ticket has been estimated, feel free to add yourself to the list of assignees.  If there are existing assignees we strongly recommend reaching out to them to see how their work is going.  If you are working on a ticket please regularly push your code to the relevant feature branch on the repo.  More details below.

Our default working branch is `master`.  We do work by creating branches off `master` for new features and bugfixes.  Any feature should include appropriate Cucumber acceptance tests and Mocha unit tests.  We try to avoid view and controller tests, and focus purely on unit tests at the model and service level where possible.  A bugfix may include an acceptance test depending on where the bug occurred, but fixing a bug should start with the creation of a test that replicates the bug, so that any bugfix submission will include an appropriate test as well as the fix itself.

Each developer will usually work on a feature branch in the repo.  Please ask [tansaku](https://github.com/tansaku) or [João](https://github.com/joaopapereira) for access to the relevant [GitHub team](https://github.com/orgs/AgileVentures/teams/asyncvoters) so you can push feature branches to the repo. Before starting work on a new feature or bugfix, please ensure you have synced your local master:

```
git pull origin master
```

Note that you should be re-syncing daily (even hourly at very active times) on your feature/bugfix branch to ensure that you are always building on top of very latest develop code.

As mentioned above, we use [Waffle](https://waffle.io/AgileVentures/AsyncVoter) to manage our work on features, chores and bugfixes.  Every pull request should a corresponding GitHub issue, and when you create feature/bug-fix branches please include the id of the relevant issue, e.g.

```
git checkout -b 799_add_contributing_md
```

Please ensure that each commit in your pull request makes a single coherent change and that the overall pull request only includes commits related to the specific GitHub issue that the pull request is addressing.  This helps the project managers understand the PRs and merge them more quickly.

Whatever you are working on, or however far you get please do open a "Work in Progress" (WIP) [pull request](https://help.github.com/articles/creating-a-pull-request/) (just prepend your PR title with "[WIP]" ) so that others in the team can comment on your approach.  Even if you hate your horrible code :-) please throw it up there and we'll help guide your code to fit in with the rest of the project.


Before you make a pull request it is a great idea to sync again to the origin master branch to reduce the chance that there will be any merge conflicts arising from other PRs that have been merged to develop since you started work:

```
git pull origin master
```

In your pull request description please include a sensible description of your code and a tag `fixes #<issue-id>` e.g. :

```
This PR adds a CONTRIBUTING.md file and a docs directory

fixes #799
```

which will associate the pull request with the issue in the Waffle board.

See also [more details on submitting pull requests](how_to_submit_a_pull_request_on_github.md).

Pull Request Review
-------------------

Currently [tansaku](https://github.com/tansaku) and [João](https://github.com/joaopapereira) are pairing on the project management of WebSiteOne.  The project managers will review your pull request as soon as possible.  The project managers can merge unilaterally if necessary, but in general both project managers will need to sign off on a pull request before it is merged.

The project managers will review the pull request for coherence with the specified feature or bug fix, and give feedback on code quality, user experience, documentation and git style.  Please respond to comments from the project managers with explanation, or further commits to your pull request in order to get merged in as quickly as possible.


Code Style, Testing and Cycle
-----------------------------

We recommend the [JavaScript Style Guide](http://javascript.crockford.com/code.html)

We are doing Behaviour-driven development (BDD) and Test-driven development (TDD). We use Cucumber/Chai for BDD and Chai/Mocha for Unit testing.

When you take on a task, remember to ensure:

* the feature is in the Cucumber features directory (BDD)
* the feature has scenarios written, and those scenarios have appropriate steps defined (BDD)
* that before you write a class and/or (public) function ensure you write the chai/mocha test first (TDD)
* you run those tests, even if you make a cosmetic change or just a change to comments
* to commit
* to push to the feature branch

If you are unsure of any of this - don't worry - help is at hand. Pairing up helps!
