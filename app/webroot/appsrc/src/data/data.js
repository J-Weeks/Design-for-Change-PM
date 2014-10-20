define([
	'app',
  'Mustache',
],
function(App, Mustache) {
	
	Data = {
		MustacheLib: Mustache,
		Models: {
			UserModel: Backbone.Model.extend({
			  url: '/dfcusa-pm/dfcusa-pm/api/user/me'
			}),

			OrganizationModel: Backbone.Model.extend({
			  url: '/dfcusa-pm/dfcusa-pm/api/organization'
			}),

			ProjectModel: Backbone.Model.extend({
			  url: '/dfcusa-pm/dfcusa-pm/api/project'
			}),

			ContentModel: Backbone.Model.extend({
			  url: '/dfcusa-pm/dfcusa-pm/api/content'
			}),

			ActivityModel: Backbone.Model.extend({
			}),

			SkillModel: Backbone.Model.extend({
				url: '/dfcusa-pm/dfcusa-pm/api/skill'
			})
		}
	}

	Data.Collections = {
		Projects: Backbone.Collection.extend({
			model: Data.Models.ProjectModel,
			url: '/dfcusa-pm/dfcusa-pm/api/projects'
		}),

		Activities: Backbone.Collection.extend({
			model: Data.Models.ActivityModel,
			url: '/dfcusa-pm/dfcusa-pm/api/activities'
		}),

		Users: Backbone.Collection.extend({
			model: Data.Models.UserModel,
			url: '/dfcusa-pm/dfcusa-pm/api/users'
		}),

		Organizations: Backbone.Collection.extend({
			model: Data.Models.OrganizationModel,
			url: '/dfcusa-pm/dfcusa-pm/api/organizations'
		}),

		Content: Backbone.Collection.extend({
			model: Data.Models.ContentModel,
			url: '/dfcusa-pm/dfcusa-pm/api/content'
		}),

		Skills: Backbone.Collection.extend({
			model: Data.Models.SkillModel,
			url: '/dfcusa-pm/dfcusa-pm/api/skills'
		})
	}

  return Data;
});