define([
  'app',
  'Handlebars',
  'Mustache',
  'data/data',
  'modules/home'
],

function(App, Handlebars, Mustache, Data, Home) {
  var HomeRouter = {};

  HomeRouter.Router = Backbone.Router.extend({
    routes: {
      'projects'                               : 'showProjects',
      'project/:id'                            : 'showProject',
      'project/:id/:section'                   : 'showProject',
    },
    initialize: function() {
      this.Layout = new Home.Layout();

      this.models = {
        user                    : new Data.Models.UserModel(),
        project                 : new Data.Models.ProjectModel(),
      };

      if (window.oCurrentUser) {
        this.models.user.set(window.oCurrentUser);
        this.models.user.bind('change', function() { window.oCurrentUser = $(this)[0].attributes; });
      }

      if ($('#header_container').length > 0) {
        $('#header_container').html(Handlebars.compile($('#headerTemplate').html())({user: window.oCurrentUser}));
      }

      App.HomeRouter = this;
    },
    resetViews: function() {
      _.each(this.Layout.views, function(view) {
        if (view['__manager__'].selector != 'main') {
          view.unload();
        }
      });
    },
    showProjects: function(e) {
      this.Layout.setView('projects', new Home.ProjectsView());
      this.Layout.getView('projects').render();
    },
    showProject: function(projectid, stage) {
      this.Layout.setView('home', new Home.ProjectView());
      this.Layout.getView('home').iProjectId = projectid;
      if (stage != undefined) this.Layout.getView('home').sStage = stage;
      this.Layout.getView('home').render();
    }
  });

  return HomeRouter;
});
