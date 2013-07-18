define([
	'views/base/view', 
	'text!templates/competition.hbs'
], function(View, template){

	return View.extend({
		autoRender: true,
		template : template
	});

});