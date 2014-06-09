define([
  'app',
  'Handlebars',
  'routers/login-router',
  'routers/home-router',
],

function (App, Handlebars, LoginRouter, HomeRouter) {

  var Router = Backbone.Router.extend({
    routes: {
      ''                  : 'index',
    },
    initialize: function(){
      var self = this;

      this.routers = {
        login       : new LoginRouter.Router(),
        home        : new HomeRouter.Router(),
      };

      if ((window.location.href.indexOf('login') != -1) && (window.location.href.indexOf('#') == -1)) {
        this.routers['login'].showLogin();
      }
      if ((window.location.href.indexOf('home') != -1)) {
        this.routers['home'].showProjects();
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
