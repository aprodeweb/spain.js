/**
 * @fileOverview Configure requirejs modules shortcuts and dependencies
 * @author Javier Brea
 */
require.config({
  deps: ['main'],
  paths: {
    jquery: 'vendor/jquery-1.9.0.min',
    bootstrap: 'vendor/bootstrap.min',
    smoothScroll: 'vendor/jquery.smooth-scroll.min'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    smoothScroll: {
      deps: ['jquery']
    }
  }
});