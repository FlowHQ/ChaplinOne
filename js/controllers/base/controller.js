define(['chaplin', 'views/site-view', 'views/navigation-view'], function(Chaplin, SiteView, NavView) {
  'use strict';

  var Controller = Chaplin.Controller.extend({
    // Place your application-specific controller features here.
    beforeAction: function() {
      this.compose('site', SiteView);
      this.compose('navigation', NavView, {region: 'navigation'});
    }
  });

  return Controller;
});
