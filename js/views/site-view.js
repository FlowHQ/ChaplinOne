define(['views/base/view', 'text!templates/site.hbs'], function(View, template) {
  'use strict';

  var SiteView = View.extend({
    container: 'body',
    regions: {
      navigation: '#navigation',
      left: '#leftbar',
      main: '#main-content'
    },
    template: template
  });

  return SiteView;
});
