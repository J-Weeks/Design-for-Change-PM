define([
  'app',
  'Mustache',
  'data/data',
  'modules/login'
],

function(App, Mustache, Data, Login) {
  var LoginRouter = {};

  LoginRouter.Router = Backbone.Router.extend({
    routes: {
      
    },
    initialize: function() {
      this.Layout = new Login.Layout();

      this.models = {
        user                 : new Data.Models.UserModel(),
      };

      App.LoginRouter = this;
    },
    resetViews: function() {
      _.each(this.Layout.views, function(view) {
        if (view['__manager__'].selector != 'main') {
          view.unload();
        }
      });
    },
    showLogin: function(e) {
      this.Layout.setView('login', new Login.LoginFormView());
      this.Layout.getView('login').render();
    }
  });

  return LoginRouter;
});
