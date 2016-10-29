module.exports = function() {

  this.Given(/^The json request data$/, function (string, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });


this.When(/^I make a POST request to "([^"]*)"$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

this.When(/^I make a GET request to "([^"]*)"$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         // callback(null, 'pending');
         callback()
       });

this.Then(/^the response status code should be "([^"]*)"$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         // callback(null, 'pending');
         callback()
       });
}
