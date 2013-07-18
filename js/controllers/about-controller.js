define(['controllers/base/controller', 'models/about','views/about-view'], function(Controller, AboutModel, AboutView){

	return Controller.extend({

			index : function() {

				this.model = new AboutModel( { name : 'Matt', surname: 'Britt'} );

				this.view = new AboutView({ 
					model: this.model,
					region: 'main'});
			}

	});

});