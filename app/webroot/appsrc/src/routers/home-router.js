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
      'organization'                           : 'editOrganization',
      'profile'                                : 'editProfile',
      'projects'                               : 'showProjects',
      'project/:id'                            : 'showProject',
      'project/:id/:stage'                     : 'showProject',
      'project/:id/:stage/:section'            : 'showProject',
      'activities'                             : 'showActivities',
      'activities/:skill/:age/:time'           : 'showActivities',
      'editmentor'                             : 'editMentor'
    },
    initialize: function() {
      this.Layout = new Home.Layout();

      this.models = {
        user                    : new Data.Models.UserModel(),
        project                 : new Data.Models.ProjectModel(),
        skills                  : new Data.Collections.Skills(),
      };

      if (window.oCurrentUser) {
        this.models.user.set(window.oCurrentUser);
        this.models.user.bind('change', function() { window.oCurrentUser = $(this)[0].attributes; });
      }

      if ($('#header_container').length > 0) {


        $(document).ready(function(){
          var windowlocationhash = window.location.hash;
          $('#header_container').html(Handlebars.compile($('#headerTemplate').html())({user: window.oCurrentUser, windowhash: windowlocationhash}));
        });
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
    editOrganization: function(e) {
      this.Layout.setView('organization', new Home.OrganizationView());
      this.Layout.getView('organization').render();
    },
    editProfile: function(e) {
      this.Layout.setView('profile', new Home.ProfileView());
      this.Layout.getView('profile').render();
    },
    showProjects: function(e) {
      this.Layout.setView('projects', new Home.ProjectsView());
      this.Layout.getView('projects').render();
    },
    showProject: function(projectid, stage, section) {
      this.Layout.setView('home', new Home.ProjectView());
      this.Layout.getView('home').iProjectId = projectid;
      if (stage != undefined) this.Layout.getView('home').sStage = stage;
      if (section != undefined) this.Layout.getView('home').sSection = section;
      this.Layout.getView('home').render();
    },
    showActivities: function(skill, age, time) {
      this.Layout.setView('activities', new Home.ActivitiesView());
      this.Layout.getView('activities').sSkill = skill;
      this.Layout.getView('activities').sAge = age;
      this.Layout.getView('activities').sTime = time;
      this.Layout.getView('activities').render();
    },
    editMentor: function(e){
      this.Layout.setView('mentor', new Home.MentorView());
      this.Layout.getView('mentor').render();
    }
  });

  return HomeRouter;
});
