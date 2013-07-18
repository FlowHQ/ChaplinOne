define([
	'views/base/view', 
	'text!templates/navigation.hbs'
], function(View, template){

	return View.extend({
		autoRender: true,
		template : template
	});

});