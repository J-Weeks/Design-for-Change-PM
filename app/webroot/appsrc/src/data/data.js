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

			OrganizationModel: Backbone.Model.extend({
			  url: '/dfcusa-pm/api/organization'
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
			url: '/dfcusa-pm/api/projects'
		}),

		Activities: Backbone.Collection.extend({
			model: Data.Models.ActivityModel,
			url: '/dfcusa-pm/api/activities'
		}),

		Users: Backbone.Collection.extend({
			model: Data.Models.UserModel,
			url: '/dfcusa-pm/api/users'
		}),

		Organizations: Backbone.Collection.extend({
			model: Data.Models.OrganizationModel,
			url: '/dfcusa-pm/api/organizations'
		})
	}

  return Data;
});