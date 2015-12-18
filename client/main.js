// helper function that returns all available websites
Template.website_list.helpers({
	websites:function(){
		return Websites.find({}, {sort:{rank:-1}});
	}
});


/////
// template events
/////

Template.website_item.events({
	"click .js-upvote":function(event){
		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;

		// put the code in here to add a vote to a website!
		if (Meteor.user()) {
			console.log("Up voting website with id "+website_id);
			Websites.update({_id:website_id},{$inc: {upvotes:1}});
			Websites.update({_id:website_id},{$inc: {rank:1}});
		}
		return false;// prevent the button from reloading the page
	},
	"click .js-downvote":function(event){

		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;


		// put the code in here to remove a vote from a website!
		if (Meteor.user()) {
			console.log("Down voting website with id "+website_id);
			Websites.update({_id:website_id},{$inc:{downvotes:1}})
			Websites.update({_id:website_id},{$inc: {rank:-1}})
		}
		return false;// prevent the button from reloading the page
	}
})

Template.website_form.events({
	"click .js-toggle-website-form":function(event){
		$("#website_form").toggle('slow');
	},
	"submit .js-save-website-form":function(event){
		var title = event.target.title.value;
		var url = event.target.url.value;
		var description = event.target.description.value;
		if (Meteor.user()) {
			Websites.insert({
				title:title,
				url:url,
				description:description,
				createdOn:new Date(),
				upvotes:0,
				downvotes:0,
				rank:0
			});
		}
		return false;// stop the form submit from reloading the page

	}
});
