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

      this.routers = {
        login       : new LoginRouter.Router(),
        home        : new HomeRouter.Router(),
        admin       : new AdminRouter.Router(),
      };

      if ((window.location.href.indexOf('login') != -1) && (window.location.href.indexOf('#') == -1)) {
        this.routers['login'].showLogin();
      }

      if (window.oCurrentUser.type == 'admin') {
        if ((window.location.href.indexOf('home') != -1) && (window.location.href.indexOf('#') == -1)) {
          this.routers['admin'].showAllProjects();
        }
      } else {
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
