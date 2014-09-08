define([
  'app',
  'Handlebars',
  'Mustache',
  'data/data',
  'modules/admin'
],

function(App, Handlebars, Mustache, Data, Admin) {
  var AdminRouter = {};

  AdminRouter.Router = Backbone.Router.extend({
    routes: {
      'allprojects'                          : 'showAllProjects',
      'allactivities'                        : 'showAllActivities',
      'activity/:activityid'                 : 'editActivity'
    },
    initialize: function() {
      this.Layout = new Admin.Layout();

      this.models = {
        user                    : new Data.Models.UserModel(),
        projects                : new Data.Collections.Projects(),
        activities              : new Data.Collections.Activities(),
      };

      if (window.oCurrentUser) {
        this.models.user.set(window.oCurrentUser);
        this.models.user.bind('change', function() { window.oCurrentUser = $(this)[0].attributes; });
      }

      if ($('#header_container').length > 0) {
        $('#header_container').html(Handlebars.compile($('#headerTemplate').html())({user: window.oCurrentUser}));
      }

      App.AdminRouter = this;
    },
    resetViews: function() {
      _.each(this.Layout.views, function(view) {
        if (view['__manager__'].selector != 'main') {
          view.unload();
        }
      });
    },
    showAllProjects: function(e) {
      this.Layout.setView('projects', new Admin.AllProjectsView());
      this.Layout.getView('projects').render();
    },
    showAllActivities: function(e) {
      this.Layout.setView('activities', new Admin.AllActivitiesView());
      this.Layout.getView('activities').render();
    },
    editActivity: function(activityid) {
      this.Layout.setView('activity', new Admin.EditActivityView());
      this.Layout.getView('activity').iActivityId = activityid;
      this.Layout.getView('activity').render();
    }
  });

  return AdminRouter;
});
