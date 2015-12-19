Websites = new Mongo.Collection("Websites");

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
