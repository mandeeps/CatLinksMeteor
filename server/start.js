// start up function that creates entries in the Websites databases.
Meteor.startup(function () {
// code to run on server at startup
  if (!Websites.findOne()){
    console.log("No websites yet. Creating starter data.");
      Websites.insert({
      title:"Condescending Cat",
      url:"http://imgur.com/gallery/SpCbHBI",
      description:"He looks unhappy with you",
      createdOn:new Date(),
      submittedBy:"Manu",
      upvotes:0,
      downvotes:0,
      rank:0
    });
     Websites.insert({
      title:"Insanely Cute Cat!",
      url:"http://imgur.com/gallery/4clqUdj",
      description:"Totes adorbs",
      createdOn:new Date(),
      submittedBy:"Manu",
      upvotes:0,
      downvotes:0,
      rank:0
    });
     Websites.insert({
      title:"82 Cat Facts",
      url:"http://www.buzzfeed.com/chelseamarshall/meows#.xaGko8Q2B3",
      description:"Astounding facts about cats",
      createdOn:new Date(),
      submittedBy:"Manu",
      upvotes:0,
      downvotes:0,
      rank:0
    });
    Websites.insert({
      title:"Wikipedia Entry for Cat",
      url:"https://en.wikipedia.org/wiki/Cat",
      description:"Lots of cat info",
      createdOn:new Date(),
      submittedBy:"Manu",
      upvotes:0,
      downvotes:0,
      rank:0
    });
    Websites.insert({
      title:"Best Photo EVAR!!!!",
      url:"http://imgur.com/JYJfFJr",
      description:"Awesome because NOT A CAT!",
      createdOn:new Date(),
      submittedBy:"Manu",
      upvotes:0,
      downvotes:0,
      rank:0
    });
  }
});
