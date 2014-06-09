require.config({
  urlArgs: 'version=v0.01e',

  deps: ['mains/main'],

  paths: {
    'app'                             : '/appsrc/src/app',
    'template'                        : '/js/template',
    'jquery'                          : '/js/jquery.min',
    'jqueryui'                        : '/js/jquery-ui-1.10.3.custom.min',

    'bootstrap'                       : '/js/bootstrap',

    'lodash'                          : '/js/lodash/lodash.underscore',
    'backbone'                        : '/js/backbone/backbone',
    'backbone.layoutmanager'          : '/js/backbone.layoutmanager/backbone.layoutmanager',

    'Mustache'                        : '/js/mustache/mustache',
    'Handlebars'                      : '/js/handlebars/handlebars',

    'slimscroll'                      : '/js/slimscroll/jquery.slimscroll.min',
    'fuelux'                          : '/js/fuelux/fuelux',
    'moment'                          : '/js/moment/moment',
    'notyfy'                          : '/js/notyfy/jquery.notyfy'
  },
  map: {
    '*': { 'underscore': 'lodash' }
  },
  shim: {
    'backbone': {
      'deps': [
        'jquery',
        'lodash'
      ],
      'exports': 'Backbone'
    },
    'backbone.layoutmanager': {
      'deps': [
        'jquery',
        'backbone',
        'lodash'
      ],
      'exports': 'Backbone.LayoutManager'
    }, 
    'lodash': {
      'exports': '_'
    },

    'bootstrap'                                   : ['jquery'],
    'jqueryui'                                    : ['jquery'],
    'slimscroll'                                  : ['jquery'],
    'fuelux'                                      : ['jquery'],
    'moment'                                      : ['jquery'],
    'notyfy'                                      : ['jquery'],

    'application'                                 : ['jquery'],
    'template'                                    : ['template'],
  }

});
