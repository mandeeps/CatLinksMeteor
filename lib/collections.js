Websites = new Mongo.Collection("websites");

Websites.allow({
  insert:function(userID, doc) {
    if (Meteor.user()) {
      return true;
    } else {
      return false;
    }
  },
  update:function(userID, doc) {
    if (Meteor.user()) {
      return true;
    } else {
      return false;
    }
  }
})
