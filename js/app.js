require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    parse: {
      deps: ['jquery', 'underscore'],
      exports: 'Parse'
    }
  },
  paths: {
    jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
    underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
    backbone: 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
    parse: 'http://www.parsecdn.com/js/parse-1.3.0.min',
    bootstrap: 'http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min'
  }
});


// Load the main app module to start the app
requirejs(["main"]);
