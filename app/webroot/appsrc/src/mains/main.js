require([
  'app',
  'routers/router'
],

function(App, Router) {
  App.router = new Router();

  Backbone.history.start({ pushState: false, root: App.root });

  window.app = App;
});
