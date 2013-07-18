define([
	'views/base/view', 
	'text!templates/about.hbs'
], function(View, template){

	return View.extend({
		autoRender: true,
		template : template
	});

});