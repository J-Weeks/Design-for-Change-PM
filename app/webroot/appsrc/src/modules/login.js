define([
  'app',
  'Handlebars',
  'data/data',

  'bootstrap',
  'jqueryui',
],

function(App, Handlebars, Data) {
  var Login = {};

  Login.Layout = Backbone.Layout.extend({
    initialize : function () {
      var self = this;    
    }
  }); 
  
  Login.LoginFormView = Backbone.View.extend({
    el : '#content',
    events: {
      'click .submitLoginForm'    : 'submitLoginForm'
    },
    initialize: function () {
      var self = this;
      this.user = App.LoginRouter.models.user;
    },
    unload: function() {
      this.remove();
      this.unbind();
    },
    afterRender: function () {
      var self = this;
      
      $('#content').html(Handlebars.compile($('#loginFormTemplate').html()));

      App.setupPage();
    },
    submitLoginForm: function (e) {
      var self = this;

      e.preventDefault();

      $('#loginForm').find('.alert').addClass('hide');

      if (App.checkForm('#loginForm')) {
        this.user.url = '/dfcusa-pm/api/user/login';
        this.user.attributes.email = $('#email').val();
        this.user.attributes.password = $('#password').val();
        this.user.save({}, {success: function(data) {
          location.reload();
        }, error: function() {
          $('#loginForm').find('.alert').removeClass('hide');
        }});
      }
    }
  });

  Login.RegisterFormView = Backbone.View.extend({
    sOrganization: '',
    el : '#content',
    events: {
      'click .signUp'    : 'signUp'
    },
    initialize: function () {
      var self = this;
      this.user = App.LoginRouter.models.user;
    },
    unload: function() {
      this.remove();
      this.unbind();
    },
    afterRender: function () {
      var self = this;
      
      $('#content').html(Handlebars.compile($('#registerFormTemplate').html()));

      if (self.sOrganization != undefined) {
        self.oOrganizationModel = new Data.Models.OrganizationModel();
        self.oOrganizationModel.url = '/api/organization/' + self.sOrganization;
        self.oOrganizationModel.fetch({success: function() {
          self.sOrganization = self.oOrganizationModel.attributes.name;
          $('#organization').val(self.sOrganization);
          $('#organization').attr('disabled', true);
          $('.bigintro').html('Welcome ' + self.sOrganization);
        }});
      }

      App.setupPage();
    },
    signUp: function (e) {
      var self = this;

      e.preventDefault();

      bContinue = true;
      if ($('#first_name').val() == '') bContinue = false;
      if ($('#last_name').val() == '') bContinue = false;
      if ($('#email').val() == '') bContinue = false;
      if ($('#location').val() == '') bContinue = false;
      if ($('#organization').val() == '') bContinue = false;

      if (bContinue) {
        if ($('#password').val() == $('#password2').val()) {
          this.user.url = '/dfcusa-pm/api/user/new';
          this.user.attributes.first_name = $('#first_name').val();
          this.user.attributes.last_name = $('#last_name').val();
          this.user.attributes.location = $('#location').val();
          this.user.attributes.email = $('#email').val();
          this.user.attributes.organization = $('#organization').val();
          this.user.attributes.password = $('#password').val();
          this.user.attributes.type = 'mentor';
          this.user.save({}, {success: function(data) {
            window.location.href = '/dfcusa-pm/home#projects'
          }, error: function() {
            app.showNotify('Error creating account. That e-mail address may already be in use.', 'error');
          }});
        } else {
          app.alertBox('Error', 'The passwords do not match.', 'OK', false, false, false);  
        }
      } else {
        app.alertBox('Error', 'Please fill out all the fields.', 'OK', false, false, false);
      }
    }
  });

  return Login;
});
