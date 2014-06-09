define([  
  'backbone.layoutmanager',
  'bootstrap',
  'jqueryui',
  'moment',
  'notyfy',
  'Handlebars',
], function() {
  // FOR IE
  $.ajaxSetup({ cache: false });

  Backbone.Collection.prototype.fetch = function() {
    var fetch = Backbone.Collection.prototype.fetch;

    return function() {
      this.trigger('fetch');

      return fetch.apply(this, arguments);
    };
  }();

  var app = {
    root: ''
  };

  app.setupPage = function(Handlebars) {

  };

  app.registerHandlebarsHelpers = function(Handlebars) {
    Handlebars.registerHelper('if_eq', function(a, b, opts) {
      if(a == b)
        return opts.fn(this);
      else
        return opts.inverse(this);
    });

    Handlebars.registerHelper('if_noteq', function(a, b, opts) {
      if(a != b)
        return opts.fn(this);
      else
        return opts.inverse(this);
    }); 

    Handlebars.registerHelper('if_noteqmulti', function(a, b, opts) {
      aList = b.split(',');
      if($.inArray(a, aList) == -1)
        return opts.fn(this);
      else
        return opts.inverse(this);
    });    

    Handlebars.registerHelper('if_eqmulti', function(a, b, opts) {
      aList = b.split(',');
      if($.inArray(a, aList) > -1)
        return opts.fn(this);
      else
        return opts.inverse(this);
    });     

    Handlebars.registerHelper('if_notempty', function(a, opts) {
      if (((a != null) && (a != '') && (a != 'false') && (a != undefined) && (a != false) && (a != '"[]"')) || (a == '0.00')) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    });

    Handlebars.registerHelper('if_empty', function(a, opts) {
      if (((a == null) || (a == '') || (a == 'false') || (a == undefined) || (a == false)) && (a != '0.00'))
        return opts.fn(this);
      else
        return opts.inverse(this);
    });

    Handlebars.registerHelper('if_notjustnumber', function(a, opts) {
      if (isNaN(a)) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    });    

    Handlebars.registerHelper('if_contains', function(a, b, opts) {
      if (a != undefined) {
        if(a.indexOf(b) > -1)
          return opts.fn(this);
        else
          return opts.inverse(this);
      } else {
        return opts.inverse(this);
      }
    });

    Handlebars.registerHelper('jsonify', function(a) {
      if (a != null) {
        return JSON.stringify(a);
      } else {
        return '';
      }
    });  

    Handlebars.registerHelper('if_greaterthan', function(a, b, opts) {
      if (a > b) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    });

    Handlebars.registerHelper('if_greaterthanequal', function(a, b, opts) {
      if (a >= b) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    });

    Handlebars.registerHelper('if_countgreaterthan', function(a, b, opts) {
      if (a.length > b) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    });    

    Handlebars.registerHelper('if_greaterthanarray', function(a, b, opts) {
      if (a != undefined) {
        if (a.length > b) {
          return opts.fn(this);
        } else {
          return false;
        }
      } else {
        return false;
      }
    });

    Handlebars.registerHelper('humanDate', function(context) {
      if (context != null) {
        return moment.unix(context).format('MM/DD/YYYY');
      } else {
        return '';
      }
    });

    Handlebars.registerHelper('humanDateElapsed', function(context) {
      if (context != null) {
        return moment.unix(context).fromNow();
      } else {
        return '';
      }
    });

    Handlebars.registerHelper('fullDate', function(context) {
      if (context != null) {
        return moment.unix(context).format('MMM. D, YYYY');
      } else {
        return '';
      }
    });

    Handlebars.registerHelper('jsondecode', function(context) {
      return $.parseJSON(context);
    });

    Handlebars.registerHelper('count', function(context) {
      if (context != undefined) {
        return context.length;
      } else {
        return false;
      }
    });

    Handlebars.registerHelper('splitArray', function(context) {
      if (context != undefined) {
        return context.join(', ');
      } else {
        return false;
      }
    });

    Handlebars.registerHelper('if_aftertoday', function(a, opts) {
      if (a != null) {
        var end_date = moment(a, "MM/DD/YYYY");
        var today = new Date();
        if (end_date > today) {
          return opts.fn(this);
        } else {
          return false;
        }
      } else {
        return '';
      }
    });

    Handlebars.registerHelper('today', function() {
      var d = new Date();
      return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    });

    Handlebars.registerHelper('add', function(number, amount) {
      return number + amount;
    });


    Handlebars.registerHelper('eachkeys', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var ret = "";

      var empty = true;
      for (key in context) { empty = false; break; }

      if (!empty) {
        for (key in context) {
            ret = ret + fn({ 'key': key, 'value': context[key]});
        }
      } else {
        ret = inverse(this);
      }
      return ret;
    });

    Handlebars.registerHelper('ucWords', function(value) {
      if ((value != '') && (value != null)) {
        return new Handlebars.SafeString(app.ucwords(value.replace('_', ' ')));
      } else {
        return '';
      }
    });

    Handlebars.registerHelper('lowerCase', function(value) {
      if ((value != '') && (value != null)) {
        return value.toLowerCase();
      } else {
        return '';
      }
    });

    Handlebars.registerHelper('numberFormat', function(context) {
      if (context != undefined) {
        return parseFloat(context).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return '0.00';
      }
    });    

    Handlebars.registerHelper('dateFormatTime', function(context) {
      return moment(context * 1000).format('M/d/YYYY @ h:mm:ss a');
    });

    Handlebars.registerHelper('humanReadable', function(context) {
      return context;
      // context = context.toString();
      // return content.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }).replace(/ /g,"_");
    });

    Handlebars.registerHelper('calcPerc', function(a, b) {
      if ((a == 0) && (b == 0)) {
        return 0;
      } else if (b != 0) {
        return parseFloat((a / b) * 100).toFixed(2);
      } else {
        return 100;
      }
    });

    Handlebars.registerHelper('durationFormat', function(context) {
      context = context * 1000;
      var duration = Math.floor(context / 1000), 
          hours = (duration >= 3600) ? Math.floor(duration / 3600) : null, 
          mins = (hours) ? Math.floor(duration % 3600 / 60) : Math.floor(duration / 60), 
          secs = Math.floor(duration % 60);
      return (hours ? hours + ':' : '') + (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
    });
  };

  app.ucwords = function(str) {
    return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {
      return $1.toUpperCase();
    });
  }

  app.showNotify = function(message, type) {
    notyfy({
      template: '<div class="notyfy_message"><span class="notyfy_text"></span><div class="notyfy_close"></div></div>',
      text: message,
      type: type,
      timeout: 4000
    });
  }

  var JST = window.JST = window.JST || {};

  Backbone.Layout.configure({
    manage: true,
    prefix: '/appsrc/src/',
    fetch: function(path) {
      path = path + '.html';

      jstPath = path.replace('/appsrc/', '');

      if (JST[jstPath]) {
        return JST[jstPath];
      }

      var done = this.async();
      
      $.get(path, function(contents) {
        done(_.template(contents), self);
      });
    }
  });

  return _.extend(app, {
    module: function(additionalProps) {
      return _.extend({ Views: {} }, additionalProps);
    },

    useLayout: function(options) {
      var layout = new Backbone.Layout(_.extend({
        el: '#main'
      }, options));

      return this.layout = layout;
    }
  }, Backbone.Events);

});
