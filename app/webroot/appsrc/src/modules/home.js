define([
  'app',
  'Handlebars',
  'data/data',

  'bootstrap',
  'jqueryui',
  'fuelux',
  'notyfy',
],

function(App, Handlebars, Data) {
  var Home = {};

  Home.Layout = Backbone.Layout.extend({
    initialize : function () {
      var self = this;    
    }
  }); 
  
  Home.ProjectsView = Backbone.View.extend({
    events: {
      'click .newProject'     : 'newProject'
    },
    initialize: function () {
      var self = this;
      self.user = App.HomeRouter.models.user;
      self.user.fetch({success: function() {
        self.showProjects();
      }});
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
      $('.newProject').unbind('click').click(function() {
        self.newProject();
      });

      App.setupPage();
    },
    showProjects: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#projectsListTemplate').html()));
      _.each(self.user.attributes.projects, function(project) {
        $('#content').find('ul').append(Handlebars.compile($('#projectMainTabletTemplate').html())({organization: self.user.attributes.organization, project: project}));
      });
    },
    newProject: function() {
      bootbox.dialog({
        message: $('#newProjectModalTemplate').html(),
        title: 'Create New Project',
        buttons: {
          success: {
            label: 'Create',
            className: 'btn-success',
            callback: function(e) {
              if (App.checkForm('#newProjectForm')) {
                newproject = new Data.Models.ProjectModel();
                newproject.attributes = App.mapFormToModel($('#newProjectForm'));
                newproject.save({}, {success: function(data) {
                  App.Router.navigate('project/' + data.attributes.id, {trigger: true});
                }, error: function() {
                  bootbox.alert('Error creating project, perhaps a project with the same name already exists.');
                }});
              } else {
                return false;
              }
            }
          },
          danger: {
            label: 'Cancel',
            className: 'btn-default'
          },
        }
      });
    }
  });

  Home.ProjectView = Backbone.View.extend({
    iProjectId: false,
    sStage: 'introduction',
    initialize: function () {
      var self = this;
      this.project = App.HomeRouter.models.project;

      self.user = App.HomeRouter.models.user;
      self.user.fetch({success: function() {
        self.showProject();
      }});
    },
    unload: function() {
      this.remove();
      this.unbind();
    },
    afterRender: function () {
      var self = this;
    },
    showProject: function() {
      var self = this;

      $('#navbar_fids').removeClass('hide');
      $('#project_name').removeClass('hide');
      $('#main_menu').addClass('pull-right');

      _.each(self.user.attributes.projects, function(project) {
        if (project.id == self.iProjectId) {
          $('#project_name').html(project.name);
          self.project = new Data.Models.ProjectModel();
          self.project.attributes = project;
        }
      });

      self.stage = new Data.Models.ContentModel();
      self.stage.url = '/dfcusa-pm/api/content/' + self.sStage;
      self.stage.fetch({success: function() {
        self.showStage();
      }});

      App.setupPage();
    },
    showStage: function() {
      var self = this;

      $('.leftNav').find('li').removeClass('active');
      if (self.sStage == 'introduction') $('#menu_introduction').addClass('active');
      if (self.sStage == 'feel') $('#menu_feel').addClass('active');
      if (self.sStage == 'imagine') $('#menu_imagine').addClass('active');
      if (self.sStage == 'do') $('#menu_do').addClass('active');
      if (self.sStage == 'share') $('#menu_share').addClass('active');

      $('#menu_introduction').find('a').attr('href', '#project/' + self.iProjectId);
      $('#menu_feel').find('a').attr('href', '#project/' + self.iProjectId + '/feel');
      $('#menu_imagine').find('a').attr('href', '#project/' + self.iProjectId + '/imagine');
      $('#menu_do').find('a').attr('href', '#project/' + self.iProjectId + '/do');
      $('#menu_share').find('a').attr('href', '#project/' + self.iProjectId + '/share');

      $('#content').html(Handlebars.compile($('#stageTemplate').html()));

      $('.goToSection').unbind('click').click(function(e) {
        self.goToSection(e);
      })

      $('[data-section="started"]').click();

      App.setupPage();
    },
    goToSection: function(e) {
      var self = this;

      $('.nav-tabs').find('li').removeClass('active');
      $(e.currentTarget).parent().addClass('active');
      $('.tab-pane').removeClass('active');
      $('#' + $(e.currentTarget).attr('data-section')).addClass('active');
      $('#' + $(e.currentTarget).attr('data-section')).html(Handlebars.compile($('#' + $(e.currentTarget).attr('data-section') + 'Template').html())({content: self.stage.attributes, project: self.project.attributes}));

      $('.changeSkill').unbind('click').click(function() {
        $('.step-pane').removeClass('active');
        $('.steps').find('li').removeClass('active');
        $(this).parent().addClass('active');
        $($(this).attr('data-target')).addClass('active');
        self.currentSkill = $(this).attr('data-skill').toLowerCase();
        $('.activities').html('');
        self.showActivitiesBySkill();
      });

      $('.changeDeliverable').unbind('click').click(function() {
        $('.step-pane').removeClass('active');
        $('.steps').find('li').removeClass('active');
        $(this).parent().addClass('active');
        $($(this).attr('data-target')).addClass('active');
        if (self.project.attributes.details_obj != undefined) {
          $('#projectDeliverables').find('input,textarea,select').each(function() {
            if (self.project.attributes.details_obj.deliverables[self.sStage][$(this).attr('id')] != undefined) {
              $(this).val(self.project.attributes.details_obj.deliverables[self.sStage][$(this).attr('id')]);
            }
          });
        }

        $('.saveDeliverable').unbind('click').click(function() {
          if (self.project.attributes.details_obj == undefined) self.project.attributes.details_obj = {};
          if (self.project.attributes.details_obj.deliverables == undefined) self.project.attributes.details_obj.deliverables = {};
          if (self.project.attributes.details_obj.deliverables[self.sStage] == undefined) self.project.attributes.details_obj.deliverables[self.sStage] = {};
          $('#projectDeliverables').find('input,textarea,select').each(function() {
            if ($(this).attr('id') != '') {
              self.project.attributes.details_obj.deliverables[self.sStage][$(this).attr('id')] = $(this).val();
            }
          });
          self.project.save({}, {success: function(e) {
            app.showNotify('Saved project', 'success');
          }, error: function() {
            app.showNotify('Error saving', 'error');
          }});
        });
      });

      self.currentSkill = self.stage.attributes.content_obj.skills.skills[0].skill.toLowerCase();

      if ($(e.currentTarget).attr('data-section') == 'skills') {
        self.showActivitiesBySkill();
      }

      if ($(e.currentTarget).attr('data-section') == 'submit') {
        $('.changeDeliverable:first').click();
      }

      $('.searchActivities').unbind('click').click(function() {
        self.searchActivities();
      });
    },
    showActivitiesBySkill: function() {
      var self = this;

      $('.activities').html('<h4>Official Activities</h4>');
      self.activities = new Data.Collections.Activities;
      self.activities.url = '/dfcusa-pm/api/activities/stage/' + self.sStage + '/100';
      self.activities.fetch({success: function() {
        _.each(self.activities.models, function(activity) {
          if (activity.attributes.skills.indexOf(self.currentSkill) > -1) {
            $('.activities').append(Handlebars.compile($('#activityTemplate').html())({activity: activity.attributes}));
          }
        });
      }});
    },
    searchActivities: function() {
      var self = this;

      $('.activities').html('<h4>Found Activities</h4>');
      self.activities = new Data.Collections.Activities;
      self.activities.url = '/dfcusa-pm/api/activities/stage/' + self.sStage;
      self.activities.fetch({success: function() {
        _.each(self.activities.models, function(activity) {
          if ((activity.attributes.skills.indexOf($('#search-skill').val()) > -1) || ($('#search-skill').val() == 'all')) {
            if ((activity.attributes.time_required == $('#search-time_required').val()) || ($('#search-time_required').val() == 'all')) {
              if ((activity.attributes.age_group == $('#search-age_group').val())) {
                $('.activities').append(Handlebars.compile($('#activityTemplate').html())({activity: activity.attributes}));
              }
            }
          }
        });
      }});
    }
  });

  return Home;
});
