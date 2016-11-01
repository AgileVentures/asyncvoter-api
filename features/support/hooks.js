let Story = require(process.cwd() + '/src/story/story.model');

module.exports = function() {
  // Asynchronous Callback
  this.Before(function (scenario, callback) {

    Story.remove({}, function(err) {
      if (err) {
        callback(err);
      }
      else {
        callback();
      }
    });
  });

}





// module.exports = function() {
//
//   this.World = require('world').World;
//
//   this.Before = function(callback) {
//
//     this.doBeforeScenario();
//
//     callback();
//   }
//
// }




// "use strict";
//
// // Import required packages
// let mongoose = require("mongoose");
//
// var server = require(process.cwd() + '/bin/server');
//
// let Story = require(process.cwd() + '/src/story/story.model');
//
// module.exports.Hooks = function () {
//
//   this.Before({}, function (done) {
//     mongoose.connection.on('connected', done);
//   });
//
//   // TODO: METHOD NOT RUNNING - WHY??
//   this.Before({}, function(done) {
//     Story.remove({}, function(err) {
//       if(err) {
//         throw err;
//       }
//       done();
//     });
//   });
//
//   this.After({}, function (done) {
//     server.close();
//     done();
//   });
//
// };
