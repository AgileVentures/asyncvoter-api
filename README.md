[![Stories in Ready](https://badge.waffle.io/AgileVentures/AsyncVoter.png?label=ready&title=Ready)](https://waffle.io/AgileVentures/AsyncVoter)
# AsyncVoter
For Voting on Stories and Tickets remotely and asynchronously e.g. planning poker

# Table of content
* [Install](#install)
* [Configure](#configure-the-application)
* Run
  * [Application](#running-the-application)
  * [Unit tests](#running-tests)
* [Troubleshooting](#troubleshooting)

# Install
In order to install this application you need first to ensure that you have NPM installed

To install the application get the code
```
git clone https://github.com/AgileVentures/AsyncVoter.git
```

Inside the folder AsyncVoter run the following command
```
npm install
```

At this point we have all the dependencies installed and we are ready to start

# Configure the application

... We will need to fill this up with mongo db connection info

# Running the application

After the configuration is done we can start the application using

```
npm start
```

# Running tests

To run all the tests execute

```
npm run spec
```

# Troubleshooting

## Mocha not installed error

If you get this error try cleaning the cache using

```
npm cache clean
```