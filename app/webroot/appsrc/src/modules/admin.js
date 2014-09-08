define([
  'app',
  'Handlebars',
  'data/data',

  'bootstrap',
  'jqueryui'
],

function(App, Handlebars, Data) {
  var Admin = {};

  Admin.Layout = Backbone.Layout.extend({
    initialize : function () {
      var self = this;    
    }
  }); 
  
  Admin.AllProjectsView = Backbone.View.extend({
    initialize: function () {
      var self = this;
      self.getProjects();
    },
    unload: function() {
      this.remove();
      this.unbind();
    },
    afterRender: function () {
      var self = this;

      $('#navbar_fids').addClass('hide');
      $('#main_menu').removeClass('pull-right');
      $('#project_name').addClass('hide');
      App.setupPage();
    },
    getProjects: function() {
      var self = this;
      self.projects = App.AdminRouter.models.projects;
      self.projects.fetch({success: function() {
        self.showProjects();
      }});
    },
    showProjects: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#allProjectsListTemplate').html()));
      _.each(self.projects.models, function(project) {
        $('#content').find('.projectsList').append(Handlebars.compile($('#projectMiniTabletTemplate').html())({organization: project.attributes.organization, project: project.attributes}));
      });
  
      $('#newProject').unbind('click').click(function() {
        self.newProject();
      });

      $('.deleteProject').unbind('click').click(function() {
        window.projectId = $(this).attr('data-id');
        if (App.alertBox('Delete Project', 'Are you sure you want to delete this project?', 'Yes', 'Cancel', function() {
          newproject = new Data.Models.ProjectModel();
          newproject.id = window.projectId;
          newproject.url = '/dfcusa-pm/api/project/' + window.projectId;
          newproject.destroy({success: function() {
            self.getProjects();
          }});
        }));
      });
    }
  });

  Admin.AllActivitiesView = Backbone.View.extend({
    initialize: function () {
      var self = this;
      self.getActivities();
    },
    unload: function() {
      this.remove();
      this.unbind();
    },
    afterRender: function () {
      var self = this;

      $('#navbar_fids').addClass('hide');
      $('#main_menu').removeClass('pull-right');
      $('#project_name').addClass('hide');
      App.setupPage();
    },
    getActivities: function() {
      var self = this;
      self.activities = App.AdminRouter.models.activities;
      self.activities.fetch({success: function() {
        self.showActivities();
      }});
    },
    showActivities: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#allActivitiesListTemplate').html()));
      _.each(self.activities.models, function(activity) {
        $('#content').find('.activitiesList').append(Handlebars.compile($('#activityRowTemplate').html())({activity: activity.attributes}));
      });

      $('.deleteActivity').unbind('click').click(function() {
        window.activityId = $(this).attr('data-id');
        if (App.alertBox('Delete Activity', 'Are you sure you want to delete this activity?', 'Yes', 'Cancel', function() {
          newactivity = new Data.Models.ActivityModel();
          newactivity.id = window.activityId;
          newactivity.url = '/dfcusa-pm/api/activity/' + window.activityId;
          newactivity.destroy({success: function() {
            self.getActivities();
          }});
        }));
      });

      app.setupPage();
    }
  });

  Admin.EditActivityView = Backbone.View.extend({
    iActivityId: false,
    initialize: function () {
      var self = this;
    },
    unload: function() {
      this.remove();
      this.unbind();
    },
    afterRender: function () {
      var self = this;

      $('#navbar_fids').addClass('hide');
      $('#main_menu').removeClass('pull-right');
      $('#project_name').addClass('hide');
      App.setupPage();

      self.getActivity();
    },
    getActivity: function() {
      var self = this;
      if (self.iActivityId != false) {
        self.activity = new Data.Models.ActivityModel();
        self.activity.url = '/api/activity/' + self.iActivityId;
        self.activity.fetch({success: function() {
          self.showActivity();
        }});
      }
    },
    showActivity: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#editActivityTemplate').html())({activity: self.activity.attributes}));

      $('.saveActivity').unbind('click').click(function() {
        self.saveActivity();
      });
      
      app.setupPage();
    },
    saveActivity: function() {
      var self = this;
      self.activity.attributes = App.mapFormToModel($('#activityForm'));
      self.activity.save({}, {success: function() {
        self.getActivity();
      }});
    }
  });

  return Admin;
});
