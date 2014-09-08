require.config({
  urlArgs: 'version=v0.01e',

  deps: ['mains/main'],

  paths: {
    'app'                             : '/dfcusa-pm/appsrc/src/app',
    'template'                        : '/dfcusa-pm/js/template',
    'jquery'                          : '/dfcusa-pm/js/jquery.min',
    'jqueryui'                        : '/dfcusa-pm/js/jquery-ui-1.10.3.custom.min',

    'bootstrap'                       : '/dfcusa-pm/js/bootstrap',

    'lodash'                          : '/dfcusa-pm/js/lodash/lodash.underscore',
    'backbone'                        : '/dfcusa-pm/js/backbone/backbone',
    'backbone.layoutmanager'          : '/dfcusa-pm/js/backbone.layoutmanager/backbone.layoutmanager',

    'Mustache'                        : '/dfcusa-pm/js/mustache/mustache',
    'Handlebars'                      : '/dfcusa-pm/js/handlebars/handlebars',

    'slimscroll'                      : '/dfcusa-pm/js/slimscroll/jquery.slimscroll.min',
    'fuelux'                          : '/dfcusa-pm/js/fuelux/fuelux',
    'moment'                          : '/dfcusa-pm/js/moment/moment',
    'notyfy'                          : '/dfcusa-pm/js/notyfy/jquery.notyfy'
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
