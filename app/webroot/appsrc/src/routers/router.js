define([
  'app',
  'Handlebars',
  'routers/login-router',
  'routers/home-router',
  'routers/admin-router',
],

function (App, Handlebars, LoginRouter, HomeRouter, AdminRouter) {

  var Router = Backbone.Router.extend({
    routes: {
      ''                  : 'index',
    },
    initialize: function(){
      var self = this;

      $(document).ajaxError(function( event, jqxhr, settings, exception ) {
        if (jqxhr.status == 401) {
          location.href = '/dfcusa-pm/pages/login';
        }
      });

      this.routers = {
        login       : new LoginRouter.Router(),
      };

      if ((window.location.href.indexOf('login') != -1) && (window.location.href.indexOf('#') == -1)) {
        this.routers['login'].showLogin();
      }

      if (window.oCurrentUser.type == 'admin') {
        this.routers.admin = new AdminRouter.Router();

        if ((window.location.href.indexOf('home') != -1) && (window.location.href.indexOf('#') == -1)) {
          this.routers['admin'].showAllProjects();
        }
      } else {
        this.routers.home = new HomeRouter.Router();

        if ((window.location.href.indexOf('home') != -1) && (window.location.href.indexOf('#') == -1)) {
          this.routers['home'].showProjects();
        }
      }

      App.registerHandlebarsHelpers(Handlebars);
      window.router = self;
    },
    index: function() {
      var self = this;
    }
  });

  return Router;

});
