define([
  'app',
  'Handlebars',
  'data/data',

  'bootstrap',
  'jqueryui',
  'messenger',
  'upload'
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
            Messenger().post({
              message: 'Activity deleted',
              type: 'success',
              hideAfter: 5
            })
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
      if ((self.iActivityId != false) && (self.iActivityId != 'new')) {
        self.activity = new Data.Models.ActivityModel();
        self.activity.url = '/api/activity/' + self.iActivityId;
        self.activity.fetch({success: function() {
          self.showActivity();
        }});
        $('.uploadFile').removeClass('hide');
      } else {
        self.activity = new Data.Models.ActivityModel();
        self.activity.attributes.title = 'New Activity';
        self.activity.url = '/api/activity/' + self.iActivityId;
        self.showActivity();
        $('.uploadFile').addClass('hide');
      }
    },
    showActivity: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#editActivityTemplate').html())({activity: self.activity.attributes}));

      $('.saveActivity').unbind('click').click(function() {
        self.saveActivity();
      });

      window.iActivityId = self.iActivityId;
      $('.uploadPdfButton').unbind('click').click(function() {
        $('.uploadPdf').click();
        $('.uploadPdf').change(function() {
          $(this).upload('/api/activity/' + window.iActivityId + '/upload', function(res) {
            oRes = $.parseJSON(res.substring(res.indexOf("{"), res.lastIndexOf("}") + 1));
            self.activity.attributes.pdf = oRes.file;
            self.showActivity();
           }, 'html');
        });
      });
      
      App.setupPage();
    },
    saveActivity: function() {
      var self = this;
      self.activity.attributes = App.mapFormToModel($('#activityForm'));
      self.activity.save({}, {success: function(data) {
        self.iActivityId = data.id;
        Messenger().post({
          message: 'Saved activity',
          type: 'success',
          hideAfter: 5
        })
        self.getActivity();
      }, error: function() {
        Messenger().post({
          message: 'Error saving activity',
          type: 'error',
          hideAfter: 5
        })
      }});
    }
  });

  Admin.AllUsersView = Backbone.View.extend({
    initialize: function () {
      var self = this;
      self.getUsers();
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
    getUsers: function() {
      var self = this;
      self.users = App.AdminRouter.models.users;
      self.users.fetch({success: function() {
        self.showUsers();
      }});
    },
    showUsers: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#allUsersListTemplate').html()));
      _.each(self.users.models, function(user) {
        $('#content').find('.usersList').append(Handlebars.compile($('#userRowTemplate').html())({user: user.attributes}));
      });

      $('.deleteUser').unbind('click').click(function() {
        window.userId = $(this).attr('data-id');
        if (App.alertBox('Delete User', 'Are you sure you want to delete this user?', 'Yes', 'Cancel', function() {
          newuser = new Data.Models.ActivityModel();
          newuser.id = window.userId;
          newuser.url = '/dfcusa-pm/api/user/' + window.userId;
          newuser.destroy({success: function() {
            Messenger().post({
              message: 'User deleted',
              type: 'success',
              hideAfter: 5
            })
            self.getUsers();
          }});
        }));
      });

      App.setupPage();
    }
  });

  Admin.EditUserView = Backbone.View.extend({
    iUserId: false,
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

      self.getUser();
    },
    getUser: function() {
      var self = this;
      if ((self.iUserId != false) && (self.iUserId != 'new')) {
        self.user = new Data.Models.UserModel();
        self.user.url = '/api/user/' + self.iUserId;
        self.user.fetch({success: function() {
          self.showUser();
        }});
        $('.uploadFile').removeClass('hide');
      } else {
        self.user = new Data.Models.ActivityModel();
        self.user.attributes.title = 'New Activity';
        self.user.url = '/api/user/' + self.iUserId;
        self.showUser();
        $('.uploadFile').addClass('hide');
      }
    },
    showUser: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#editUserTemplate').html())({user: self.user.attributes}));

      $('.saveUser').unbind('click').click(function() {
        self.saveUser();
      });

      window.iUserId = self.iUserId;
      $('.uploadPicButton').unbind('click').click(function() {
        $('.uploadPic').click();
        $('.uploadPic').change(function() {
          $(this).upload('/api/user/' + window.iUserId + '/upload', function(res) {
            oRes = $.parseJSON(res.substring(res.indexOf("{"), res.lastIndexOf("}") + 1));
            self.user.attributes.profilepic = oRes.file;
            self.showUser();
           }, 'html');
        });
      });
      
      App.setupPage();
    },
    saveUser: function() {
      var self = this;
      self.user.attributes = App.mapFormToModel($('#userForm'));
      self.user.attributes.id = self.iUserId;
      self.user.save({}, {success: function(data) {
        self.iUserId = data.id;
        Messenger().post({
          message: 'Saved user',
          type: 'success',
          hideAfter: 5
        })
        self.getUser();
      }, error: function() {
        Messenger().post({
          message: 'Error saving user',
          type: 'error',
          hideAfter: 5
        })
      }});
    }
  });

  Admin.AllOrganizationsView = Backbone.View.extend({
    initialize: function () {
      var self = this;
      self.getOrganizations();
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
    getOrganizations: function() {
      var self = this;
      self.organizations = App.AdminRouter.models.organizations;
      self.organizations.fetch({success: function() {
        self.showOrganizations();
      }});
    },
    showOrganizations: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#allOrganizationsListTemplate').html()));
      _.each(self.organizations.models, function(organization) {
        $('#content').find('.organizationsList').append(Handlebars.compile($('#organizationRowTemplate').html())({organization: organization.attributes}));
      });

      $('.deleteOrganization').unbind('click').click(function() {
        window.organizationId = $(this).attr('data-id');
        if (App.alertBox('Delete Organization', 'Are you sure you want to delete this organization?', 'Yes', 'Cancel', function() {
          neworginization = new Data.Models.OrganizationModel();
          neworginization.id = window.organizationId;
          neworginization.url = '/dfcusa-pm/api/organization/' + window.organizationId;
          neworginization.destroy({success: function() {
            Messenger().post({
              message: 'Organization deleted',
              type: 'success',
              hideAfter: 5
            })
            self.getOrganizations();
          }});
        }));
      });

      App.setupPage();
    }
  });

  Admin.EditOrganizationView = Backbone.View.extend({
    iOrganizationId: false,
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

      self.getOrganization();
    },
    getOrganization: function() {
      var self = this;
      if ((self.iOrganizationId != false) && (self.iOrganizationId != 'new')) {
        self.organization = new Data.Models.OrganizationModel();
        self.organization.url = '/api/organization/' + self.iOrganizationId;
        self.organization.fetch({success: function() {
          self.showOrganization();
        }});
        $('.uploadFile').removeClass('hide');
      } else {
        self.organization = new Data.Models.OrganizationModel();
        self.organization.attributes.title = 'New Organization';
        self.organization.url = '/api/organization/' + self.iOrganizationId;
        self.showOrganization();
        $('.uploadFile').addClass('hide');
      }
    },
    showOrganization: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#editOrganizationTemplate').html())({organization: self.organization.attributes}));

      $('.saveOrganization').unbind('click').click(function() {
        self.saveOrganization();
      });

      window.iOrganizationId = self.iOrganizationId;
      $('.uploadPicButton').unbind('click').click(function() {
        $('.uploadPic').click();
        $('.uploadPic').change(function() {
          $(this).upload('/api/organization/' + window.iOrganizationId + '/upload', function(res) {
            oRes = $.parseJSON(res.substring(res.indexOf("{"), res.lastIndexOf("}") + 1));
            self.organization.attributes.logo = oRes.file;
            self.showOrganization();
           }, 'html');
        });
      });
      
      App.setupPage();
    },
    saveOrganization: function() {
      var self = this;
      self.organization.attributes = App.mapFormToModel($('#organizationForm'));
      self.organization.attributes.id = self.iOrganizationId;
      self.organization.save({}, {success: function(data) {
        self.iOrganizationId = data.id;
        Messenger().post({
          message: 'Saved organization',
          type: 'success',
          hideAfter: 5
        })
        self.getOrganization();
      }, error: function() {
        Messenger().post({
          message: 'Error saving organization',
          type: 'error',
          hideAfter: 5
        })
      }});
    }
  });

  return Admin;
});
