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
        this.user.attributes.username = $('#username').val();
        this.user.attributes.password = $('#password').val();
        this.user.save({}, {success: function(data) {
          location.reload();
        }, error: function() {
          $('#loginForm').find('.alert').removeClass('hide');
        }});
      }
    }
  });

  return Login;
});
