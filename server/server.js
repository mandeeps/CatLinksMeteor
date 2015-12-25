Meteor.methods({
  'autofillForm':function(url) {
    return HTTP.get(url, {});
  }
});
