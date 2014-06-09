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
      this.user = Common.LoginRouter.models.user;
    },
    unload: function() {
      this.remove();
      this.unbind();
    },
    afterRender: function () {
      var self = this;
      
      $('#content').html(Handlebars.compile($('#loginFormTemplate').html()));

      Common.setupPage();
    },
    submitLoginForm: function (e) {
      e.preventDefault();
      
      $('#loginForm').find('.alert').addClass('hide');

      if (Common.checkForm('#loginForm')) {
        this.user.url = '/api/user/login';
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
