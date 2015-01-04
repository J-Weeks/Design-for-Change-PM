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
      'editproject/:projectid'               : 'editProject',
      'allactivities'                        : 'showAllActivities',
      'activity/:activityid'                 : 'editActivity',
      'allusers'                             : 'showAllUsers',
      'user/:userid'                         : 'editUser',
      'user/:userid/:organizationid'         : 'editUser',
      'allorganizations'                     : 'showAllOrganizations',
      'organization/:organizationid'         : 'editOrganization',
      'content'                              : 'showAllContent',
      'content/:stage'                       : 'editContent',
      'skills'                               : 'showAllSkills'
    },
    initialize: function() {
      this.Layout = new Admin.Layout();

      this.models = {
        user                    : new Data.Models.UserModel(),
        projects                : new Data.Collections.Projects(),
        activities              : new Data.Collections.Activities(),
        users                   : new Data.Collections.Users(),
        organizations           : new Data.Collections.Organizations(),
        content                 : new Data.Collections.Content(),
        skills                  : new Data.Collections.Skills(),
      };

      if (window.oCurrentUser) {
        this.models.user.set(window.oCurrentUser);
        this.models.user.bind('change', function() { window.oCurrentUser = $(this)[0].attributes; });
      }

      if ($('#header_container').length > 0) {
        $('#header_container').html(Handlebars.compile($('#adminHeaderTemplate').html())({user: window.oCurrentUser}));
      }

      $('.leftnav').addClass('hide');

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
    editProject: function(projectid) {
      this.Layout.setView('project', new Admin.EditProjectView());
      this.Layout.getView('project').iProjectId = projectid;
      this.Layout.getView('project').render();
    },
    showAllActivities: function(e) {
      this.Layout.setView('activities', new Admin.AllActivitiesView());
      this.Layout.getView('activities').render();
    },
    editActivity: function(activityid) {
      this.Layout.setView('activity', new Admin.EditActivityView());
      this.Layout.getView('activity').iActivityId = activityid;
      this.Layout.getView('activity').render();
    },
    showAllUsers: function(e) {
      this.Layout.setView('users', new Admin.AllUsersView());
      this.Layout.getView('users').render();
    },
    editUser: function(userid, organizationid) {
      this.Layout.setView('user', new Admin.EditUserView());
      this.Layout.getView('user').iUserId = userid;
      this.Layout.getView('user').iOrganizationId = organizationid;
      this.Layout.getView('user').render();
    },
    showAllOrganizations: function(e) {
      this.Layout.setView('organizations', new Admin.AllOrganizationsView());
      this.Layout.getView('organizations').render();
    },
    editOrganization: function(organizationid) {
      this.Layout.setView('organization', new Admin.EditOrganizationView());
      this.Layout.getView('organization').iOrganizationId = organizationid;
      this.Layout.getView('organization').render();
    },
    showAllContent: function(e) {
      this.Layout.setView('content', new Admin.AllContentView());
      this.Layout.getView('content').render();
    },
    editContent: function(stage) {
      this.Layout.setView('content', new Admin.EditContentView());
      this.Layout.getView('content').sStage = stage;
      this.Layout.getView('content').render();
    },
    showAllSkills: function() {
      this.Layout.setView('skills', new Admin.AllSkillsView());
      this.Layout.getView('skills').render();
    }
  });

  return AdminRouter;
});
