Router.configure({
	layoutTemplate:'layout'
});

Router.route('/', function(){
	this.render('navbar', {
		to:'navbar'
	});
	this.render('home', {
		to:'main'
	});
});

Router.route('site/:_id/:title', function(){
	this.render('navbar', {
		to:'navbar'
	});
	this.render('site', {
		to:'main',
		data:function() {
			return Websites.findOne({_id:this.params._id});
		}
	});
});

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

// helper function that returns all available websites
Template.website_list.helpers({
	websites:function(){
		return Websites.find({}, {sort:{rank:-1}});
	}
});

Template.website_item.events({
	'click .js-upvote':function(event){
		var website_id = this._id;

		if (Meteor.user()) {
			//console.log("Up voting website with id "+website_id);
			Websites.update({_id:website_id},{$inc: {upvotes:1}});
			Websites.update({_id:website_id},{$inc: {rank:1}});
		} else {alert ('Log in to submit, comment and vote');}
		return false;// prevent the button from reloading the page
	},
	'click .js-downvote':function(event){
		var website_id = this._id;

		if (Meteor.user()) {
			//console.log("Down voting website with id "+website_id);
			Websites.update({_id:website_id},{$inc:{downvotes:1}})
			Websites.update({_id:website_id},{$inc: {rank:-1}})
		} else {alert ('Log in to submit, comment and vote');}
		return false;// prevent the button from reloading the page
	},
})

Template.website_form.events({
	'click .js-toggle-website-form':function(event){
		$('#website_form').toggle('slow');
	},
	'submit .js-save-website-form':function(event){
		var title = $('#title').val();
		var url = $('#url').val(); //event.target.url.value;
		var description = $('#description').val();

		 if (!title || !url) {
		 	alert('fill in the form');
			return false;
		 }



		// validate url is absolute link
		if (!url.startsWith('http://') && !url.startsWith('https://')) {
		 	console.log(url);
			url = "//" + url;
			console.log(url);
		}

		if (Meteor.user()) {
			Websites.insert({
				title:title,
				url:url,
				description:description,
				createdOn:new Date(),
				upvotes:0,
				downvotes:0,
				rank:0,
				submittedBy:Meteor.user().username
			});
			$('#website_form').toggle('fast');
		} else {alert ('Log in to submit, comment and vote');}

		return false;// stop the form submit from reloading the page

	}
});

Template.site.events({
	'click .js-toggle-comment-form':function(event) {
		$('#comment_form').toggle('slow');
	},
	'submit .js-save-comment-form':function(event) {
		var website_id = this._id;
		var comment = event.target.comment.value;

		if (!comment) {return false;}
		if (Meteor.user()) {
			Websites.update({_id:website_id},
				{$push:{comments:{
					posted:new Date(),
					author:Meteor.user().username,
					text:comment
				}}}
			);
			$('#comment_form').toggle('fast');
		} else {alert ('Log in to submit, comment and vote');}

		return false;
	}

});
