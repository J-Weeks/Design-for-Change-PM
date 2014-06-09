define([
	'app',
  'Mustache',
],
function(App, Mustache) {
	
	Data = {
		MustacheLib: Mustache,
		Models: {
			UserModel: Backbone.Model.extend({
			  url: '/api/user/me'
			}),

			ProjectModel: Backbone.Model.extend({
			  url: '/api/project'
			}),

			ContentModel: Backbone.Model.extend({
			  url: '/api/content'
			}),

			ActivityModel: Backbone.Model.extend({
			}),
		}
	}

	Data.Collections = {
		Projects: Backbone.Collection.extend({
			model: Data.Models.ProjectModel,
			url: '/api/user/me'
		}),

		Activities: Backbone.Collection.extend({
			model: Data.Models.ActivityModel,
			url: '/api/activities/stage'
		}),
	}

  return Data;
});