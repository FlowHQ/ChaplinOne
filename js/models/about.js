define([
  'chaplin',
  'models/base/model'
], function(Chaplin, Model) {
  'use strict';

  return Model.extend({
    defaults: {
      name: 'Name not given',
      surname : 'Surname not given'
    }

    // ,initialize: function(attributes, options) {
    //  Model.prototype.initialize.apply(this, arguments);
    //  console.debug('HelloWorld#initialize');
    // }
  });
});
