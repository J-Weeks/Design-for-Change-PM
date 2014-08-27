define([
	'app',
  'Mustache',
],
function(App, Mustache) {
	
	Data = {
		MustacheLib: Mustache,
		Models: {
			UserModel: Backbone.Model.extend({
			  url: '/dfcusa-pm/api/user/me'
			}),

			ProjectModel: Backbone.Model.extend({
			  url: '/dfcusa-pm/api/project'
			}),

			ContentModel: Backbone.Model.extend({
			  url: '/dfcusa-pm/api/content'
			}),

			ActivityModel: Backbone.Model.extend({
			}),
		}
	}

	Data.Collections = {
		Projects: Backbone.Collection.extend({
			model: Data.Models.ProjectModel,
			url: '/dfcusa-pm/api/user/me'
		}),

		Activities: Backbone.Collection.extend({
			model: Data.Models.ActivityModel,
			url: '/dfcusa-pm/api/activities/stage'
		}),
	}

  return Data;
});