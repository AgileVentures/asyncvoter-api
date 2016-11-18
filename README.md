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
* [Rest API](#rest-api)

# Install
In order to install this application you need first to ensure that you have NPM installed
With Node.JS version 6.8 or higher

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

Please create a .env file (if you don't have one already) and copy the contents from .env.sample. This is needed before running your application.

... We will need to fill this up with mongo db connection info

If you are unsure what this means just: `cp .env.sample .env`


# Running the application

After the configuration is done we can start the application using

```
npm start
```

# Running tests

To run all the Chai/Mocha tests execute

```
npm test
```

To use the new cucumber tests execute:

```
npm run cucumber
```


# Troubleshooting

## Mocha not installed error

If you get this error try cleaning the cache using

```
npm cache clean
```

## ES6 Support

If you are experiencing errors like:

```
Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
```

Make sure that the version of node is >= 6.8

```
node -v
```

# Adding REST routes

Top-level routing is now handled in the `src/routes.js` file. For domain-level sub-routes please use an appropriate routing file in the domain folder.

Please see `src/routes.js` and `src/story/story.routes.js` for examples of how it is done.

# Rest API

## Stories

### GET /stories
```bash
curl localhost:3000/stories
```

#### `200` response
```json
[{
  "_id":"58288ffb96bdf8316b234782",
   "updatedAt":"2016-11-13T16:08:27.411Z",
   "createdAt":"2016-11-13T16:08:27.411Z",
   "name":"document the API",
   "size":"0",
   "url":"https://github.com/AgileVentures/AsyncVoter/issues/69",
   "__v":0
}]
```

### POST /stories
```bash
curl -H "Content-Type: application/json" localhost:3000/stories -d '{"name": "document the API", "size": "0", "url": "https://github.com/AgileVentures/AsyncVoter/issues/69"}'
```

#### `201` response
```json
{
  "__v":0,
  "updatedAt":"2016-11-13T16:08:27.411Z",
  "createdAt":"2016-11-13T16:08:27.411Z",
  "name":"document the API",
  "size":"0",
  "url":"https://github.com/AgileVentures/AsyncVoter/issues/69",
  "_id":"58288ffb96bdf8316b234782"
}
```

### GET /stories/:id
```bash
curl localhost:3000/stories
```

#### `200` response
```json
{
  "_id":"58288e666023a72ff4856fe2",
  "updatedAt":"2016-11-13T16:01:42.527Z",
  "createdAt":"2016-11-13T16:01:42.527Z",
  "__v":0
}
```

### PUT /stories/:id
```bash
curl -H "Content-Type: application/json" -X PUT localhost:3000/stories -d '{"size": "3"}'
```

#### `200` response
```json
{
  "_id":"58288ffb96bdf8316b234782",
  "updatedAt":"2016-11-18T07:56:57.652Z",
  "createdAt":"2016-11-13T16:08:27.411Z",
  "name":"document the API",
  "size":"3",
  "url":"https://github.com/AgileVentures/AsyncVoter/issues/69",
  "__v":0
}
```

## Votes

### GET /stories/:id/votes
```bash
curl -H "Content-Type: application/json" localhost:3000/stories/58288e666023a72ff4856fe2/votes
```

#### `200` response
```json
{
  "__v":0,
  "story":"58288e666023a72ff4856fe2",
  "size":"1",
  "_id":"5828908096bdf8316b234783"
}
```

### POST /stories/:id/votes
```bash
curl -H "Content-Type: application/json" localhost:3000/stories/58288e666023a72ff4856fe2/votes -d '{"size": "1"}'
```

#### `201` response
```json
{
  "__v":0,
  "story":"58288e666023a72ff4856fe2",
  "size":"1",
  "_id":"5828908096bdf8316b234783"
}
```
