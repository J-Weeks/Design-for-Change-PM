define([
  'app',
  'Handlebars',
  'data/data',

  'bootstrap',
  'jqueryui',
  'upload',
  'summernote'
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

      App.setupPage();
    }
  });

  Admin.EditProjectView = Backbone.View.extend({
    iProjectId: false,
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

      self.getProject();
    },
    getProject: function() {
      var self = this;
      if ((self.iProjectId != false) && (self.iProjectId != 'new')) {
        self.project = new Data.Models.ProjectModel();
        self.project.url = '/dfcusa-pm/api/project/' + self.iProjectId;
        self.project.fetch({success: function() {
          self.showProject();
        }});
        $('.uploadFile').removeClass('hide');
      } else {
        self.project = new Data.Models.ProjectModel();
        self.project.attributes.title = 'New Project';
        self.project.url = '/dfcusa-pm/api/project/' + self.iProjectId;
        self.showProject();
        $('.uploadFile').addClass('hide');
      }
    },
    showProject: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#editProjectTemplate').html())({project: self.project.attributes}));

      self.content = new Data.Collections.Content();
      self.content.fetch({success: function() {
        _.each(self.content.models, function(content) {
          if (content.attributes.deliverables) {
            $('#projectContent').append(Handlebars.compile($('#contentSectionTemplate').html())({content: content.attributes}));
            if ((content.attributes.content_obj != undefined) && (content.attributes.content_obj.submit != undefined)) {
              _.each(content.attributes.content_obj.submit.deliverables, function(deliverable) {
                $('[data-stage-section="' + content.attributes.stage + '"]').append(Handlebars.compile($('#projectDeliverableTemplate').html())({deliverable: deliverable, stage: content.attributes.stage, content: ''}));
              });
            }
          }
        });

        if ((self.project.attributes.details_obj != undefined) && (self.project.attributes.details_obj.deliverables != undefined)) {
          _.each(self.project.attributes.details_obj.deliverables, function(stage) {
            for (var contentName in stage) {
              $('#' + contentName).val(stage[contentName]);
            }
          });
        }
      }});
      
      $('.saveProject').unbind('click').click(function() {
        self.saveProject();
      });
      
      $('.carousel-indicators').find('li').each(function() {
        if (self.project.attributes.profilepic == '/dfcusa-pm/app/webroot/assets/projects/' + $(this).attr('data-image')) {
          $('#content').find('.carousel').carousel(parseInt($(this).attr('data-slide-to')));
        }
      });

      self.organizations = App.AdminRouter.models.organizations;
      self.organizations.fetch({success: function() {
        $('#organization_id').html('');
        _.each(self.organizations.models, function(organization) {
          $('#organization_id').append('<option value="' + organization.attributes.id + '">' + organization.attributes.name + '</option>');
        });
        $('#organization_id').val(self.project.attributes.organization_id);
      }});

      App.setupPage();
    },
    saveProject: function() {
      var self = this;
      self.project.attributes = App.mapFormToModel($('#projectForm'));
      self.project.save({}, {success: function(data) {
        self.iProjectId = data.id;
        app.showNotify('Saved project', 'success');
        self.getActivity();
      }, error: function() {
        app.showNotify('Error saving project', 'error');
      }});
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
            app.showNotify('Activity deleted', 'success');
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
        self.activity.url = '/dfcusa-pm/api/activity/' + self.iActivityId;
        self.activity.fetch({success: function() {
          self.showActivity();
        }});
        $('.uploadFile').removeClass('hide');
      } else {
        self.activity = new Data.Models.ActivityModel();
        self.activity.attributes.title = 'New Activity';
        self.activity.url = '/dfcusa-pm/api/activity/' + self.iActivityId;
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
          $(this).upload('/dfcusa-pm/api/activity/' + window.iActivityId + '/upload', function(res) {
            oRes = $.parseJSON(res.substring(res.indexOf("{"), res.lastIndexOf("}") + 1));
            self.activity.attributes.pdf = oRes.file;
            self.showActivity();
           }, 'html');
        });
      });

      self.users = new Data.Collections.Users();
      self.users.fetch({success: function() {
        _.each(self.users.models, function(user) {
          $('#activityForm').find('#author_id').append('<option value="' + user.attributes.id + '">' + user.attributes.first_name + ' ' + user.attributes.last_name + ' (' + user.attributes.type + ')</option>');
        });
      }});

      self.skills = App.AdminRouter.models.skills;
      self.skills.fetch({success: function() {
        _.each(self.skills.models, function(skill) {
          sSelected = '';
          if (self.activity.attributes.skills.indexOf(skill.attributes.skill) > -1) sSelected = ' SELECTED ';
          $('#skills').append('<option value="' + skill.attributes.skill + '"' + sSelected + '>' + skill.attributes.skill + '</option>');
        });
      }});
      
      App.setupPage();
    },
    saveActivity: function() {
      var self = this;
      self.activity.attributes = App.mapFormToModel($('#activityForm'));
      self.activity.save({}, {success: function(data) {
        self.iActivityId = data.id;
        app.showNotify('Saved activity', 'success');
        self.getActivity();
      }, error: function() {
        app.showNotify('Error saving activity', 'error');
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
            app.showNotify('User deleted', 'success');
            self.getUsers();
          }});
        }));
      });

      App.setupPage();
    }
  });

  Admin.EditUserView = Backbone.View.extend({
    iUserId: false,
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

      self.getUser();
    },
    getUser: function() {
      var self = this;
      if ((self.iUserId != false) && (self.iUserId != 'new')) {
        self.user = new Data.Models.UserModel();
        self.user.url = '/dfcusa-pm/api/user/' + self.iUserId;
        self.user.fetch({success: function() {
          self.showUser();
        }});
        $('.uploadFile').removeClass('hide');
      } else {
        self.user = new Data.Models.ActivityModel();
        self.user.attributes.first_name = 'New';
        self.user.attributes.last_name = 'User';
        self.user.url = '/dfcusa-pm/api/user/' + self.iUserId;
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
          $(this).upload('/dfcusa-pm/api/user/' + window.iUserId + '/upload', function(res) {
            oRes = $.parseJSON(res.substring(res.indexOf("{"), res.lastIndexOf("}") + 1));
            self.user.attributes.profilepic = oRes.file;
            self.showUser();
           }, 'html');
        });
      });

      self.organizations = App.AdminRouter.models.organizations;
      self.organizations.fetch({success: function() {
        _.each(self.organizations.models, function(organization) {
          $('#organization_id').append('<option value="' + organization.attributes.id + '">' + organization.attributes.name + '</option>');
        });
        $('#organization_id').val(self.user.attributes.organization_id);

        if (self.iOrganizationId != undefined) {
          $('#organization_id').val(self.iOrganizationId);          
        }
      }});
      
      App.setupPage();
    },
    saveUser: function() {
      var self = this;
      self.user.attributes = App.mapFormToModel($('#userForm'));
      self.user.attributes.id = self.iUserId;
      self.user.save({}, {success: function(data) {
        self.iUserId = data.id;
        app.showNotify('Saved user', 'success');
        self.getUser();
      }, error: function() {
        app.showNotify('Error saving user', 'error');
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
            app.showNotify('Organization deleted', 'success');
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
        self.organization.url = '/dfcusa-pm/api/organization/' + self.iOrganizationId;
        self.organization.fetch({success: function() {
          self.showOrganization();
        }});
        $('.uploadFile').removeClass('hide');
      } else {
        self.organization = new Data.Models.OrganizationModel();
        self.organization.attributes.title = 'New Organization';
        self.organization.url = '/dfcusa-pm/api/organization/' + self.iOrganizationId;
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
          $(this).upload('/dfcusa-pm/api/organization/' + window.iOrganizationId + '/upload', function(res) {
            oRes = $.parseJSON(res.substring(res.indexOf("{"), res.lastIndexOf("}") + 1));
            self.organization.attributes.logo = oRes.file;
            self.showOrganization();
           }, 'html');
        });
      });

      _.each(self.organization.attributes.users, function(user) {
        $('#content').find('.usersList').append(Handlebars.compile($('#organizationUserRowTemplate').html())({user: user}));
      });
      
      App.setupPage();
    },
    saveOrganization: function() {
      var self = this;
      self.organization.attributes = App.mapFormToModel($('#organizationForm'));
      self.organization.attributes.id = self.iOrganizationId;
      self.organization.save({}, {success: function(data) {
        self.iOrganizationId = data.id;
        app.showNotify('Saved organization', 'success');
        self.getOrganization();
      }, error: function() {
        app.showNotify('Error saving organization', 'error');
      }});
    }
  });

  Admin.AllContentView = Backbone.View.extend({
    initialize: function () {
      var self = this;
      self.getContent();
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
    getContent: function() {
      var self = this;
      self.content = App.AdminRouter.models.content;
      self.content.fetch({success: function() {
        self.showContent();
      }});
    },
    showContent: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#contentListTemplate').html()));
      _.each(self.content.models, function(contentModule) {
        $('#content').find('.contentList').append(Handlebars.compile($('#contentRowTemplate').html())({content: contentModule.attributes}));
      });

      App.setupPage();
    }
  });

  Admin.EditContentView = Backbone.View.extend({
    sStage: false,
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

      self.getContent();
    },
    getContent: function() {
      var self = this;
      self.contentModule = new Data.Models.ContentModel();
      self.contentModule.url = '/dfcusa-pm/api/content/' + self.sStage;
      self.contentModule.fetch({success: function() {
        self.showContent();
      }});
    },
    showContent: function() {
      var self = this;

      if (self.contentModule.attributes.fids_stage) {
        $('#content').html(Handlebars.compile($('#editFIDSContentTemplate').html())({content: self.contentModule.attributes}));
      } else {
        $('#content').html(Handlebars.compile($('#editContentTemplate').html())({content: self.contentModule.attributes}));
      }

      if ((self.contentModule.attributes.content_obj != undefined) && (self.contentModule.attributes.content_obj.skills != undefined)) {
        _.each(self.contentModule.attributes.content_obj.skills.skills, function(skill) {
          $('#content').find('#skillsGroup').append(Handlebars.compile($('#skillsSectionTemplate').html())({skill: skill}));
        });

        _.each(self.contentModule.attributes.content_obj.submit.deliverables, function(deliverable) {
          $('#content').find('#deliverablesGroup').append(Handlebars.compile($('#deliverableSectionTemplate').html())({deliverable: deliverable}));
        });
      }

      $('.saveContent').unbind('click').click(function() {
        self.saveContent();
      });

      $('#content').find('.removeSkill').unbind('click').click(function() {
        $(this).parent().parent().slideUp(200, function() {
          $(this).remove();
        });
      });

      $('#content').find('.newSkill').unbind('click').click(function() {
        self.skills = App.AdminRouter.models.skills;
        self.skills.fetch({success: function() {
          $('#newContentSkillModal').find('#skillName').html('');
          $('#newContentSkillModal').find('#skillText').val('');
          _.each(self.skills.models, function(skill) {
            $('#newContentSkillModal').find('#skillName').append('<option value="' + skill.attributes.skill + '">' + App.ucwords(skill.attributes.skill) + '</option>');
          });
          $('#newContentSkillModal').modal('show');
          $('#newContentSkillModal').find('.addSkill').unbind('click').click(function() {
            skill = {};
            skill.skill = $('#newContentSkillModal').find('#skillName').val();
            skill.text = $('#newContentSkillModal').find('#skillText').code();
            $('#content').find('#skillsGroup').append(Handlebars.compile($('#skillsSectionTemplate').html())({skill: skill}));
            $('#newContentSkillModal').modal('hide');

            $('#content').find('.removeSkill').unbind('click').click(function() {
              $(this).parent().parent().slideUp(200, function() {
                $(this).remove();
              });
            });
          });
        }});
      });

      $('#content').find('.removeDeliverable').unbind('click').click(function() {
        $(this).parent().parent().slideUp(200, function() {
          $(this).remove();
        });
      });

      $('#content').find('.newDeliverable').unbind('click').click(function() {
        $('#newDeliverableModal').modal('show');
        $('#newDeliverableModal').find('.addDeliverable').unbind('click').click(function() {
          deliverable = {};
          deliverable.label = $('#newDeliverableModal').find('#deliverableLabel').val();
          deliverable.key = deliverable.label.toLowerCase();
          deliverable.key = deliverable.key.replace(' ', '_');
          deliverable.form = $('#newDeliverableModal').find('#deliverableForm').code();
          $('#content').find('#deliverablesGroup').append(Handlebars.compile($('#deliverableSectionTemplate').html())({deliverable: deliverable}));
          $('#newDeliverableModal').modal('hide');

          $('#content').find('.removeDeliverable').unbind('click').click(function() {
            $(this).parent().parent().slideUp(200, function() {
              $(this).remove();
            });
          });
        });
      });

      App.setupPage();
    },
    saveContent: function() {
      var self = this;
      if (self.contentModule.attributes.fids_stage) {
        self.contentModule.attributes.content_obj = {};
        self.contentModule.attributes.content_obj.getting_started = {};
        self.contentModule.attributes.content_obj.getting_started.text = $('#getting_started_text').code();
        self.contentModule.attributes.content_obj.getting_started.video = $('#getting_started_video').val();
        self.contentModule.attributes.content_obj.why = {};
        self.contentModule.attributes.content_obj.why.text = $('#why_text').code();
        self.contentModule.attributes.content_obj.why.video = $('#why_video').val();
        self.contentModule.attributes.content_obj.skills = {};
        self.contentModule.attributes.content_obj.skills.text = $('#skills_text').code();
        self.contentModule.attributes.content_obj.skills.skills = new Array();
        self.contentModule.attributes.content_obj.submit = {};
        self.contentModule.attributes.content_obj.submit.text = $('#submit_text').code();
        self.contentModule.attributes.content_obj.submit.deliverables = new Array();
      } else {
        self.contentModule.attributes.content_obj.content = $('#content_text').code();
      }
      $('#content').find('.skillContent').each(function() {
        oSkill = {};
        oSkill.skill = $(this).attr('data-skill');
        oSkill.text = $(this).find('.htmleditor').code();
        self.contentModule.attributes.content_obj.skills.skills.push(oSkill);
      });

      $('#content').find('.deliverableContent').each(function() {
        oDeliverable = {};
        oDeliverable.label = $(this).find('#deliverableLabel').val();
        oDeliverable.key = oDeliverable.label.toLowerCase();
        oDeliverable.key = oDeliverable.key.replace(' ', '_');
        oDeliverable.explanation = $(this).find('.htmleditor').code();
        oDeliverable.form = $(this).find('.form').val();
        self.contentModule.attributes.content_obj.submit.deliverables.push(oDeliverable);
      });

      self.contentModule.url = '/dfcusa-pm/api/content';

      self.contentModule.save({}, {success: function(data) {
        app.showNotify('Saved content', 'success');
        self.getContent();
      }, error: function() {
        app.showNotify('Error saving content', 'error');
      }});
    }
  });

  Admin.AllSkillsView = Backbone.View.extend({
    initialize: function () {
      var self = this;
      self.getSkills();
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
    getSkills: function() {
      var self = this;
      self.skills = App.AdminRouter.models.skills;
      self.skills.fetch({success: function() {
        self.showSkills();
      }});
    },
    showSkills: function() {
      var self = this;
      $('#content').html(Handlebars.compile($('#skillsListTemplate').html()));
      _.each(self.skills.models, function(skill) {
        $('#content').find('.skillsList').append(Handlebars.compile($('#skillRowTemplate').html())({skill: skill.attributes}));
      });

      $('.addNewSkill').unbind('click').click(function() {
        $('#newSkillModal').modal('show');
        $('#newSkillModal').find('.modal-title').html('Add New Skill');
        $('#newSkillModal').find('#skill').val('');
        $('#newSkillModal').find('#color').val('');
        $('#newSkillModal').find('.addSkill').unbind('click').click(function() {
          oSkill = new Data.Models.SkillModel();
          oSkill.attributes.skill = $('#newSkillModal').find('#skill').val();
          oSkill.attributes.color = $('#newSkillModal').find('#color').val();
          $('#newSkillModal').modal('hide');
          oSkill.save({}, {success: function(data) {
            app.showNotify('Saved skill', 'success');
            self.getSkills();
          }, error: function() {
            app.showNotify('Error saving skill', 'error');
          }});        
        });
      });

      $('.removeSkill').unbind('click').click(function() {
        window.skillId = $(this).attr('data-id');
        if (App.alertBox('Delete Skill', 'Are you sure you want to delete this skill?', 'Yes', 'Cancel', function() {
          oSkill = new Data.Models.SkillModel();
          oSkill.id = window.skillId;
          oSkill.url = '/dfcusa-pm/api/skill/' + window.skillId;
          oSkill.destroy({success: function() {
            app.showNotify('Skill deleted', 'success');
            self.getSkills();
          }});
        }));
      });

      $('.editSkill').unbind('click').click(function() {
        window.skillId = $(this).attr('data-id');
        _.each(self.skills.models, function(skill) {
          if (skill.attributes.id == window.skillId) { 
            $('#newSkillModal').find('#skill').val(skill.attributes.skill);
            $('#newSkillModal').find('#color').val(skill.attributes.color);
            $('#newSkillModal').find('.modal-title').html('Edit Skill');
            $('#newSkillModal').modal('show');
            $('#newSkillModal').find('.addSkill').unbind('click').click(function() {
              oSkill = new Data.Models.SkillModel();
              oSkill.attributes.id = window.skillId;
              oSkill.attributes.skill = $('#newSkillModal').find('#skill').val();
              oSkill.attributes.color = $('#newSkillModal').find('#color').val();
              $('#newSkillModal').modal('hide');
              oSkill.save({}, {success: function(data) {
                app.showNotify('Saved skill', 'success');
                self.getSkills();
              }, error: function() {
                app.showNotify('Error saving skill', 'error');
              }});        
            });
          }
        });
      });

      App.setupPage();
    }
  });

  return Admin;
});
