define([
  'app',
  'Handlebars',
  'data/data',

  'bootstrap',
  'jqueryui'
],

function(App, Handlebars, Data) {
  var Home = {};

  Home.Layout = Backbone.Layout.extend({
    initialize : function () {
      var self = this;
    }
  });

  Home.OrganizationView = Backbone.View.extend({
    initialize: function () {
      var self = this;
    },
    unload: function() {
      this.remove();
      this.unbind();
    },
    afterRender: function() {
      var self = this;

      $('#editOrganizationModal').modal('show');
      $('#editOrganizationModal').find('#name').val(window.oCurrentUser.organization.name);
      $('#editOrganizationModal').find('img').attr('src', window.oCurrentUser.organization.logo);
      $('#editOrganizationModal').find('#logo_source').val(window.oCurrentUser.organization.logo);

      window.iOrganizationId = window.oCurrentUser.organization.id;
      $('.uploadPicButton').unbind('click').click(function() {
        $('.uploadPic').click();
        $('.uploadPic').change(function() {
          $(this).upload('/dfcusa-pm/api/organization/' + window.iOrganizationId + '/upload', function(res) {
            oRes = $.parseJSON(res.substring(res.indexOf("{"), res.lastIndexOf("}") + 1));
            $('#editOrganizationModal').find('#logo_source').val(oRes.file);
           }, 'html');
        });
      });

      $('#editOrganizationModal').find('.saveOrganization').unbind('click').click(function() {
        self.saveOrganization();
      });

      App.setupPage();
    },
    saveOrganization: function() {
      var self = this;

      if ($('#editOrganizationModal').find('#name').val() != '') {
        self.oOrganization = new Data.Models.OrganizationModel();
        self.oOrganization.attributes.name = $('#editOrganizationModal').find('#name').val();
        self.oOrganization.attributes.logo = $('#editOrganizationModal').find('#logo_source').val();
        self.oOrganization.save({}, {success: function(data) {
          $('#editOrganizationModal').modal('hide');
          app.showNotify('Saved organization', 'success');
          window.location.href = '/home#projects';
        }, error: function() {
          app.showNotify('Error saving organization', 'error');
        }});
      } else {
        $('#editOrganizationModal').find('.error-span').removeClass('hide');
      }
    }
  });

  Home.ProfileView = Backbone.View.extend({
    initialize: function () {
      var self = this;
    },
    unload: function() {
      this.remove();
      this.unbind();
    },
    afterRender: function() {
      var self = this;

      $('#editProfileModal').modal('show');
      $('#editProfileModal').find('#first_name').val(window.oCurrentUser.first_name);
      $('#editProfileModal').find('#last_name').val(window.oCurrentUser.last_name);
      $('#editProfileModal').find('#email').val(window.oCurrentUser.email);
      $('#editProfileModal').find('#location').val(window.oCurrentUser.location);
      $('#editProfileModal').find('.profilePic').attr('src', window.oCurrentUser.profilepic);
      $('#editProfileModal').find('#profile_pic_source').val(window.oCurrentUser.profilepic);

      $('.uploadPicButton').unbind('click').click(function() {
        $('.uploadPic').click();
        $('.uploadPic').change(function() {
          $(this).upload('/dfcusa-pm/api/user/' + window.oCurrentUser.id + '/upload', function(res) {
            oRes = $.parseJSON(res.substring(res.indexOf("{"), res.lastIndexOf("}") + 1));
            $('#editProfileModal').find('#profile_pic_source').val(oRes.file);
           }, 'html');
        });
      });

      $('#editProfileModal').find('.saveProfile').unbind('click').click(function() {
        self.saveProfile();
      });

      App.setupPage();
    },
    saveProfile: function() {
      var self = this;

      bContinue = true;

      if ($('#editProfileModal').find('#first_name').val() == '') {
        bContinue = false
        $('#editProfileModal').find('#first_name').parent().find('.error-span').removeClass('hide');
      }

      if ($('#editProfileModal').find('#last_name').val() == '') {
        bContinue = false
        $('#editProfileModal').find('#last_name').parent().find('.error-span').removeClass('hide');
      }

      if ($('#editProfileModal').find('#email').val() == '') {
        bContinue = false
        $('#editProfileModal').find('#email').parent().find('.error-span').removeClass('hide');
      }

      if ($('#editProfileModal').find('#location').val() == '') {
        bContinue = false
        $('#editProfileModal').find('#location').parent().find('.error-span').removeClass('hide');
      }

      if (bContinue) {
        self.oUser = new Data.Models.UserModel();
        self.oUser.attributes.id = window.oCurrentUser.id;
        self.oUser.attributes.first_name = $('#editProfileModal').find('#first_name').val();
        self.oUser.attributes.last_name = $('#editProfileModal').find('#last_name').val();
        self.oUser.attributes.email = $('#editProfileModal').find('#email').val();
        self.oUser.attributes.location = $('#editProfileModal').find('#location').val();
        self.oUser.attributes.password = $('#editProfileModal').find('#password').val();
        self.oUser.attributes.profilepic = $('#editProfileModal').find('#profile_pic_source').val();
        self.oUser.url = '/dfcusa-pm/api/user';
        self.oUser.save({}, {success: function(data) {
          $('#editProfileModal').modal('hide');
          app.showNotify('Saved profile', 'success');
          window.location.href = '/home#projects';
        }, error: function() {
          app.showNotify('Error saving profile', 'error');
        }});
      }
    }
  });

  Home.ProjectsView = Backbone.View.extend({
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

      $('.leftnav').addClass('hide');
      $('#projectHeader').addClass('hide');
      $('.inner_nav').find('a').removeClass('active');
      $('.myprojects').addClass('active');
      $('#navbar_fids').addClass('hide');
      $('#main_menu').removeClass('pull-right');
      $('#project_name').addClass('hide');
      App.setupPage();
    },
    getProjects: function() {
      var self = this;
      self.user = App.HomeRouter.models.user;
      self.user.fetch({success: function() {
        self.showProjects();
      }});
    },
    showProjects: function() {
      var self = this;

      bFound = false;

      $('#content').html(Handlebars.compile($('#welcomeViewTemplate').html()));

      self.projects = new Data.Collections.Projects();
      self.projects.url = '/dfcusa-pm/api/organization/' + self.user.attributes.organization_id + '/projects';
      self.projects.fetch({success: function() {
        if (self.projects.models.length > 0) {
          $('#content').html(Handlebars.compile($('#projectsListTemplate').html()));
          _.each(self.projects.models, function(project) {
            $('#content').find('.projectsList').append(Handlebars.compile($('#projectMainTabletTemplate').html())({organization: self.user.attributes.organization, project: project.attributes}));
            bFound = true;
          });

          $('#title').html(self.user.attributes.organization.name + ' Projects');

          $('.newProject').unbind('click').click(function() {
            self.newProject();
          });

          $('.deleteProject').unbind('click').click(function() {
            window.projectId = $(this).attr('data-id');
            if (App.alertBox('Delete Project', 'Are you sure you want to delete this project?', 'Yes', 'Cancel', function() {
              oNewProject = new Data.Models.ProjectModel();
              oNewProject.id = window.projectId;
              oNewProject.url = '/dfcusa-pm/api/project/' + window.projectId;
              oNewProject.destroy({success: function() {
                self.getProjects();
              }});
            }));
          });
        }
      }});




      if (bFound == false) {
        self.content = new Data.Models.ContentModel();
        self.content.url = '/dfcusa-pm/api/content/welcome';
        self.content.fetch({success: function() {
          $('#content').find('.modal-body').html(self.content.attributes.content_obj.content);

          $('.newProject').unbind('click').click(function() {
            self.newProject();
          });
        }});
      }

      $('.uploadFiles').addClass('hide');
    },
    newProject: function() {
      console.log('test');
      var self = this;
      $('#newProjectModal').modal().on('shown.bs.modal', function (e) {
        $('#newProjectModal').find('.carousel').carousel();
        $('.existingNewProject').unbind('click').click(function() {
          $('#newProjectModal').modal('hide');
          self.newExistingProject();
        });
        $('.blankNewProject').unbind('click').click(function() {
          $('#newProjectModal').modal('hide');
          self.newBlankProject();
        });
      });
    },
    newBlankProject: function() {
      oNewProject = new Data.Models.ProjectModel();
      oNewProject.attributes.name = 'New Project';
      oNewProject.attributes.profilepic = '';
      oNewProject.save({}, {success: function(data) {
        App.HomeRouter.navigate('project/' + data.attributes.id, {trigger: true});
      }, error: function() {
        alert('Error creating project, perhaps a project with the same name already exists.');
      }});
    },
    newExistingProject: function() {
      console.log('test');
      $('#existingNewProjectModal').modal().on('shown.bs.modal', function (e) {
        $('#existingNewProjectModal').find('.carousel').carousel();
        $('.createProject').unbind('click').click(function() {
          $('#existingNewProjectModal').modal('hide');
          if (App.checkForm('#newProjectForm')) {
            oNewProject = new Data.Models.ProjectModel();
            oNewProject.attributes = App.mapFormToModel($('#newProjectForm'));
            oNewProject.attributes.profilepic = '/dfcusa-pm/app/webroot/assets/projects/' + $('#existingNewProjectModal').find('.carousel-indicators').find('.active').attr('data-image');
            oNewProject.save({}, {success: function(data) {
              App.HomeRouter.navigate('project/' + data.attributes.id, {trigger: true});
            }, error: function() {
              alert('Error creating project, perhaps a project with the same name already exists.');
            }});
          } else {
            return false;
          }
        });
      });
    }
  });

  Home.ProjectView = Backbone.View.extend({
    iProjectId: false,
    sStage: 'home',
    sSection: 'home',
    initialize: function () {
      var self = this;
    },
    unload: function() {
      this.remove();
      this.unbind();
    },
    afterRender: function () {
      var self = this;

      $('.leftnav').removeClass('hide');

      $('#content').html($('#contentTemplate').html());

      self.project = new Data.Models.ProjectModel();
      self.project.url = '/dfcusa-pm/api/project/' + self.iProjectId;
      self.project.fetch({success: function() {
        self.showProject();
      }});
    },
    showProject: function() {
      var self = this;

      $('#navbar_fids').removeClass('hide');
      $('#project_name').removeClass('hide');
      $('#main_menu').addClass('pull-right');
      $('#projectHeader').html(Handlebars.compile($('#projectHeaderTemplate').html())({project: self.project.attributes}));



      $('#projectHeader').removeClass('hide');

      $('#project_name').html(self.project.attributes.name);

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
      if (self.sStage == 'home') {
        // $('.leftnav').html(Handlebars.compile($('#projectLeftNavTemplate').html())({project: self.iProjectId}));

        $('.leftnav').html(Handlebars.compile($('#roadmapTemplate').html())({project: self.iProjectId}));
//stepsTemplate
      $('.steps').click(function(){
        $(".insidepage").html("");
        $('.insidepage').html(Handlebars.compile($('#stepsTemplate').html()));
      });
//end

//timeTemplate
      $('.time').click(function(){
        $(".insidepage").html("");
        $('.insidepage').html(Handlebars.compile($('#timeTemplate').html()));
      });
//end

//resourcesTemplate
      $('.resources').click(function(){
        $(".insidepage").html("");
        $('.insidepage').html(Handlebars.compile($('#resourcesTemplate').html()));
      });
//end

//sampleProjectsTemplate
      $('.sampleProjects').click(function(){
        $(".insidepage").html("");
        $('.insidepage').html(Handlebars.compile($('#sampleProjectsTemplate').html()));
      });
//end

//portalGuideTemplate
      $('.portalGuide').click(function(){

        $(".insidepage").html("");
        $('.insidepage').html(Handlebars.compile($('#portalGuideTemplate').html()));
      });
//end

        $('.stageicons').find('img').each(function() {
          $(this).attr('src', '/dfcusa-pm/app/webroot/images/icon_' + $(this).attr('data-stage-icon') + '.png');
        });
      } else if (self.sStage == 'files') {
        // $('.leftnav').html(Handlebars.compile($('#projectLeftNavTemplate').html())({project: self.iProjectId}));

        // $('.leftnav').html(Handlebars.compile($('#roadmapTemplate').html())({project: self.iProjectId}));
        $('.stageicons').find('img').each(function() {
          $(this).attr('src', '/dfcusa-pm/app/webroot/images/icon_' + $(this).attr('data-stage-icon') + '.png');
        });
      } else {
        $('.stageicons').find('img').each(function() {
          $(this).attr('src', '/dfcusa-pm/app/webroot/images/icon_' + $(this).attr('data-stage-icon') + '.png');
          if ($(this).attr('data-stage-icon') == self.sStage) {
            $(this).attr('src', '/dfcusa-pm/app/webroot/images/icon_' + $(this).attr('data-stage-icon') + '_selected.png');
          }
        });
        $('.leftnav').html(Handlebars.compile($('#stageLeftNavTemplate').html())({project: self.iProjectId, stage: self.sStage}));
      }

      self.goToSection();

      App.setupPage();
    },
    goToSection: function() {
      var self = this;

      // $('.leftnav').find('li').removeClass('active');
      // $('[data-section="' + self.sSection + '"]').addClass('active');
      // console.log(self.sSection);
      // console.log(self.stage);

    //start nav / road bar
      var main = main = $('#main ul');

    $('.goToSection').click(function(event) {
      main.children().removeClass('active');
      this.classList.add('active');

//progress bar below
//lets DRY this up
    if (this.classList[1] == "2"){
      $('.progress-bar').attr("aria-valuenow", "33");
      $('.progress-bar').attr("width", "33%");
      $('.progress-bar').attr("style", "width:33%");
      $('.progress-bar').text("15 Minutes Left");
    } else if (this.classList[1] == "3"){
        $('.progress-bar').attr("aria-valuenow", "66");
        $('.progress-bar').attr("width", "66%");
        $('.progress-bar').attr("style", "width:66%");
        $('.progress-bar').text("10 Minutes Left");
    } else if (this.classList[1] == "4") {
      $('.progress-bar').attr("aria-valuenow", "95");
      $('.progress-bar').attr("width", "95%");
      $('.progress-bar').attr("style", "width:95%");
      $('.progress-bar').text("5 Minutes Left");
    } else{
      $('.progress-bar').attr("aria-valuenow", "0");
      $('.progress-bar').attr("width", "0%");
      $('.progress-bar').attr("style", "width:0%");
    }
    //end

    });


      // $('.contents').html('');

      // console.log(self.stage);

      $('.contents').html('');
//start upload
//not getting inside the click

// end upload


      if (self.stage.attributes.fids_stage) {
        for (var stageName in self.stage.attributes.content_obj) {
          $('.contents').append(Handlebars.compile($('#' + stageName + 'Template').html())({content: self.stage.attributes, project: self.project.attributes}));
        }

        $('.nextStepImagine').click(function(){

          var windowhasharray = window.location.hash.split("/");
          if (windowhasharray[2] === "feel"){
            windowhasharray.pop();
            windowhasharray.push("imagine");
          }else if (windowhasharray[2] === "imagine"){
            windowhasharray.pop();
            windowhasharray.push("do");
          }else if (windowhasharray[2] === "do"){
            windowhasharray.pop();
            windowhasharray.push("share");
          }else{
            windowhasharray.pop();
            windowhasharray.push("home");
            windowhasharray.push("files");
          }
          windowhasharray = windowhasharray.join("/");
          console.log(window.location.host + 'home' + windowhasharray);
          router.navigate((windowhasharray), {replace:true, trigger:true});


        });

        var waypoint = new Waypoint({
          element: document.getElementById('basic-waypoint'),
          handler: function() {
            console.log('Scrolled to waypoint!');
          }
        });
      }

       else if
       (self.sSection == 'files') {
        $('.contents').html(Handlebars.compile($('#filesViewTemplate').html()));
        self.showProjectFiles();
      } else {
        $('.contents').html(self.stage.attributes.content_obj.content);


      }


        $('.changeSkill').click(function(){
          console.log("clicked");
        });

      $('.changeSkill').unbind('click').click(function() {
        $('.step-pane').removeClass('active');
        $('.steps').find('li').removeClass('active');
        $(this).parent().addClass('active');
        $($(this).attr('data-target')).addClass('active');
        //self.currentSkill = $(this).attr('data-skill').toLowerCase();
        $('.activities').html('');
        self.showActivitiesBySkill();
      });

      $('.changeDeliverable').unbind('click').click(function() {
        $('.step-pane').removeClass('active');
        $('.steps').find('li').removeClass('active');
        $(this).parent().addClass('active');
        $($(this).attr('data-target')).addClass('active');

        $('.saveDeliverable').removeClass('hide');
        $('.uploadProjectFile').addClass('hide');
        window.iCurrentDeliverable = $(this).attr('data-deliverable');
        iIndex = -1;
        _.each(self.stage.attributes.content_obj.submit.deliverables, function(deliverable) {
          iIndex = iIndex + 1;
          if (window.iCurrentDeliverable == iIndex) {
            if (deliverable.form == 'textarea') {
              if ((self.project.attributes.details_obj.deliverables != undefined) && (self.project.attributes.details_obj.deliverables[self.sStage] != undefined) && (self.project.attributes.details_obj.deliverables[self.sStage][deliverable.key] != undefined)) {
                $('#projectDeliverables').find('[data-key="' + deliverable.key + '"]').val(self.project.attributes.details_obj.deliverables[self.sStage][deliverable.key]);
              }
            } else if (deliverable.form == 'list') {
              $('.items').html('');
              if ((self.project.attributes.details_obj.deliverables != undefined) && (self.project.attributes.details_obj.deliverables[self.sStage] != undefined) && (self.project.attributes.details_obj.deliverables[self.sStage][deliverable.key] != undefined)) {
                _.each(self.project.attributes.details_obj.deliverables[self.sStage][deliverable.key], function(deliverableValue) {
                  $('.items').append('<div class="listItemContainer"><input type="text" class="listItem form-control withButton" value="' + deliverableValue + '" data-increment="true" data-key="' + deliverable.key + '"/><i class="fa fa-trash-o listItemDelete"></i></div>');
                });
              }
            } else if (deliverable.form == 'upload') {
              $('.saveDeliverable').addClass('hide');
              $('.uploadProjectFile').removeClass('hide');

              window.iProjectId = self.project.attributes.id;

              $('.uploadProjectFile').unbind('click').click(function() {
                $('.uploadFile').click();
                $('.uploadFile').change(function() {
                  $(this).upload('/dfcusa-pm/api/project/' + window.iProjectId + '/file', function(res) {
                    location.href = '/dfcusa-pm/home#project/' + window.iProjectId + '/home/files';
                  }, 'html');
                });
              });
            }
          }
        });

        if (self.project.attributes.mentor.id != window.oCurrentUser.id) {
          $('#projectDeliverables').find('input,textarea,select').attr('disabled', true);
        }

        $('.addListDeliverable').unbind('click').click(function() {
          $('.items').append('<div class="listItemContainer"><input type="text" class="listItem form-control withButton" data-increment="true" data-key="' + $(this).attr('data-key') + '"/><i class="fa fa-trash-o listItemDelete"></i></div>');

          $('.listItemDelete').unbind('click').click(function() {
            $(this).parent().remove();
          });
        });

        $('.listItemDelete').unbind('click').click(function() {
          $(this).parent().remove();
        });

        $('.saveDeliverable').unbind('click').click(function() {
          if (self.project.attributes.details_obj == undefined) self.project.attributes.details_obj = {};
          if (self.project.attributes.details_obj.deliverables == undefined) self.project.attributes.details_obj.deliverables = {};
          if (self.project.attributes.details_obj.deliverables[self.sStage] == undefined) self.project.attributes.details_obj.deliverables[self.sStage] = {};
          iIndex = -1;
          self.project.attributes.details_obj.deliverables[self.sStage] = new Object();
          $('#projectDeliverables').find('input,textarea,select').each(function() {
            if ($(this).attr('id') != '') {
              if ($(this).attr('data-increment') == 'true') {
                if ((self.project.attributes.details_obj.deliverables[self.sStage][$(this).attr('data-key')] == undefined) || (self.project.attributes.details_obj.deliverables[self.sStage][$(this).attr('data-key')] == false)) {
                  self.project.attributes.details_obj.deliverables[self.sStage][$(this).attr('data-key')] = new Array();
                }
                if ($(this).val() != '') {
                  iIndex = iIndex + 1;
                  self.project.attributes.details_obj.deliverables[self.sStage][$(this).attr('data-key')][iIndex] = $(this).val();
                }
              } else {
                if ($(this).val() != '') {
                  self.project.attributes.details_obj.deliverables[self.sStage][$(this).attr('data-key')] = $(this).val();
                }
              }
            }
          });

          self.project.save({}, {success: function(e) {
            app.showNotify('Saved project', 'success');
          }, error: function() {
            app.showNotify('Error saving', 'error');
          }});
        });
      });

      if (self.stage.attributes.content_obj.skills != undefined) {
        self.currentSkill = 'all';
      }

      if (self.sSection == 'home') {

        // changed the == from "skill" to "home" to coerce skills to show
        // console.log(self.sSection);
        self.showActivitiesBySkill();
      }

      if (self.sSection == 'submit') {
        $('.changeDeliverable:first').click();
      }

      $('.searchActivities').unbind('click').click(function() {
        self.searchActivities();
      });

      $('#content').append(Handlebars.compile($('#projectFilesTemplate').html())({project: self.project.attributes}));

      self.skills = App.HomeRouter.models.skills;
      self.skills.fetch({success: function() {
        _.each(self.skills.models, function(skill) {
          $('.skillsList').append('<option value="' + skill.attributes.skill + '">' + app.ucwords(skill.attributes.skill) + '</option>');
        });
      }});

      $('.uploadFiles').removeClass('hide');
    },
    showProjectFiles: function() {
      var self = this;

      bFound = false;
      _.each(self.project.attributes.files_obj, function(file) {
        bFound = true;
        $('.filesList').append(Handlebars.compile($('#fileTabletTemplate').html())({file: file, filename: file.substring(file.lastIndexOf('/')+1)}));
      });

      if (!bFound) $('.noFiles').removeClass('hide');

      window.iProjectId = self.project.attributes.id;
      $('.uploadProjectFile').unbind('click').click(function() {
        $('.uploadFile').click();
        $('.uploadFile').change(function() {
          $(this).upload('/dfcusa-pm/api/project/' + window.iProjectId + '/file', function(res) {
            location.reload();
          }, 'html');
        });
      });

      $('.deleteFile').unbind('click').click(function() {
        $(this).parent().parent().remove();

        self.project.attributes.files_obj = new Array();
        $('#filesList').find('li').each(function() {
          self.project.attributes.files_obj.push($(this).attr('data-file'));
        });

        self.project.save({}, {success: function(e) {
          app.showNotify('Saved project', 'success');
        }, error: function() {
          app.showNotify('Error saving', 'error');
        }});
      });
    },
    showActivitiesBySkill: function() {
      var self = this;

      bFound = false;
      if (self.currentSkill != 'all') {
        $('.activities').html('<h4>' + app.ucwords(self.currentSkill) + ' Activities</h4>');
      } else {
        $('.activities').html('<h4>All ' + app.ucwords(self.sStage) + ' Activities</h4>')
      }
      self.activities = new Data.Collections.Activities;
      self.activities.url = '/dfcusa-pm/api/activities/stage/' + self.sStage + '/100';
      self.activities.fetch({success: function() {
        _.each(self.activities.models, function(activity) {
          if ((activity.attributes.all_skills.indexOf(self.currentSkill) > -1) || (self.currentSkill == 'all')) {
            $('.activities').append(Handlebars.compile($('#activityTemplate').html())({activity: activity.attributes}));
            bFound = true;
          }
        });
        if (bFound == false) {
          $('.activities').append('<br/><div class="alert alert-info">No activities found.</div>');
        }
        $('.uploadProjectFile').on("click", function() {
          console.log("inside prog");
          $('.uploadFile').click();
          var hash = window.location.hash.split("");
          var hashid = hash[9] + hash[10];
          $('.uploadFile').change(function() {
            // $(this).upload('/dfcusa-pm/api/project/' + window.iProjectId + '/file', function(res) {
          $(this).upload('/dfcusa-pm/api/user_project/' + hashid + '/url', function(res) {
            console.log(hashid);

            location.reload();
            }, 'html');
          });
        });
      }});
    },
    searchActivities: function() {
      var self = this;

      bFound = false;
      $('.activities').html('<h4>Found Activities</h4>');
      self.activities = new Data.Collections.Activities;
      self.activities.url = '/dfcusa-pm/api/activities/stage/' + self.sStage;
      self.activities.fetch({success: function() {
        _.each(self.activities.models, function(activity) {
          if ((activity.attributes.all_skills.indexOf($('#search-skill').val()) > -1) || ($('#search-skill').val() == 'all')) {
            if ((activity.attributes.time_required == $('#search-time_required').val()) || ($('#search-time_required').val() == 'all')) {
              if ((activity.attributes.age_group == $('#search-age_group').val())) {
                $('.activities').append(Handlebars.compile($('#activityTemplate').html())({activity: activity.attributes}));
                bFound = true;
              }
            }
          }
        });
        if (bFound == false) {
          $('.activities').append('<br/><div class="alert alert-info">No activities found.</div>');
        }
      }});
    }

  });

  Home.ActivitiesView = Backbone.View.extend({
    sSkill: 'all',
    sAge: 'all_ages',
    sTime: 'all_times',
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

      $('.inner_nav').find('a').removeClass('active');
      $('.leftnav').addClass('hide');
      $('#projectHeader').addClass('hide');
      $('.allactivities').addClass('active');
      $('#navbar_fids').addClass('hide');
      $('#main_menu').removeClass('pull-right');
      $('#project_name').addClass('hide');
      App.setupPage();
    },
    getProjects: function() {
      var self = this;
      self.user = App.HomeRouter.models.user;
      self.user.fetch({success: function() {
        self.showActivities();
      }});
    },
    showActivities: function() {
      var self = this;

      $('#content').html(Handlebars.compile($('#activitiesListTemplate').html()));
      $('.staging').html(Handlebars.compile($('#activitiesTemplate').html()));
      $('.searchToolbar').html($('.staging').find('#toolbar').html());
      $('.staging').html('');
      $('#content').find('table').css('float', 'right');


      self.skills = App.HomeRouter.models.skills;
      self.skills.fetch({success: function() {
        _.each(self.skills.models, function(skill) {
          $('.skillsList').append('<option value="' + skill.attributes.skill + '">' + app.ucwords(skill.attributes.skill) + '</option>');
        });

        //if ((self.sSkill) && (self.sAge) && (self.sTime)) {
          self.searchActivities();
        //}
      }});

      $('.searchActivities').unbind('click').click(function() {
        window.location.href = '#activities/' + $('#search-skill').val() + '/' + $('#search-age_group').val() + '/' + $('#search-time_required').val();
      });
    },
    searchActivities: function() {
      var self = this;

      bFound = false;
      $('.activitiesContent').html('');
      self.activities = new Data.Collections.Activities;
      self.activities.url = '/dfcusa-pm/api/activities';
      self.activities.fetch({success: function() {
        _.each(self.activities.models, function(activity) {
          if ((activity.attributes.all_skills.indexOf(self.sSkill) > -1) || (self.sSkill == 'all') || (self.sSkill == undefined)) {
            if ((activity.attributes.time_required == self.sTime) || (self.sTime == 'all_times') || (self.sTime == undefined)) {
              if ((activity.attributes.age_group == self.sAge) || (self.sAge == undefined)) {
                $('.activitiesContent').append(Handlebars.compile($('#activityTemplate').html())({activity: activity.attributes}));
                bFound = true;
              }
            }
          }
        });
        if (bFound == false) {
          $('.activitiesContent').append('<br/><div class="alert alert-danger">No activities found.</div>');
        }
      }});

      $('#search-skill').val(self.sSkill);
      $('#search-age_group').val(self.sAge);
      $('#search-time_required').val(self.sTime);
    }
  });


  return Home;
});
