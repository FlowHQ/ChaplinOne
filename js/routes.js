define(function() {
  'use strict';

  // The routes for the application. This module returns a function.
  // `match` is match method of the Router
  return function(match) {
    match('', 'home#index');
    match('aboutus','about#index');
    match('competition','competition#index');
    match('artists','artists#index');
  };
});
