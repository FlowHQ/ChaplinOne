//Competitor Controller
define(['controllers/base/controller', 'views/competition-view'], function(Controller, CompView){

	return Controller.extend({

			index : function() {
				this.view = new CompView({ region: 'main'});
			}

	});

});