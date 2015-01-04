<?php
/**
 * Routes configuration
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Config
 * @since         CakePHP(tm) v 0.2.9
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
/**
 * Here, we are connecting '/' (base path) to controller called 'Pages',
 * its action called 'display', and we pass a param to select the view file
 * to use (in this case, /app/View/Pages/home.ctp)...
 */

// API ROUTES
	Router::connect('/api/user/me', array('controller' => 'api', 'action' => 'getCurrentUser', '[method]' => array('GET')));
	Router::connect('/api/user/login', array('controller' => 'api', 'action' => 'loginUser', '[method]' => array('POST', 'PUT')));

	Router::connect('/api/users', array('controller' => 'api', 'action' => 'getUsers', '[method]' => array('GET')));
	Router::connect('/api/user/:userid', array('controller' => 'api', 'action' => 'getUser', '[method]' => array('GET')));
	Router::connect('/api/user', array('controller' => 'api', 'action' => 'updateUser', '[method]' => array('POST', 'PUT')));
	Router::connect('/api/user/new', array('controller' => 'api', 'action' => 'registerUser', '[method]' => array('POST', 'PUT')));
	Router::connect('/api/user/:userid', array('controller' => 'api', 'action' => 'updateUser', '[method]' => array('POST', 'PUT')));
	Router::connect('/api/user/:userid', array('controller' => 'api', 'action' => 'removeUser', '[method]' => array('DELETE')));
	Router::connect('/api/user/:userid/upload', array('controller' => 'api', 'action' => 'uploadUserProfilePic', '[method]' => array('PUT', 'POST')));

	Router::connect('/api/organizations', array('controller' => 'api', 'action' => 'getOrganizations', '[method]' => array('GET')));
	Router::connect('/api/organization', array('controller' => 'api', 'action' => 'updateOrganization', '[method]' => array('POST', 'PUT')));
	Router::connect('/api/organization/:organizationid', array('controller' => 'api', 'action' => 'getOrganization', '[method]' => array('GET')));
	Router::connect('/api/organization/:organizationid', array('controller' => 'api', 'action' => 'updateOrganization', '[method]' => array('POST', 'PUT')));
	Router::connect('/api/organization/:organizationid', array('controller' => 'api', 'action' => 'removeOrganization', '[method]' => array('DELETE')));
	Router::connect('/api/organization/:organizationid/projects', array('controller' => 'api', 'action' => 'getOrganizationProjects', '[method]' => array('GET')));

	Router::connect('/api/projects', array('controller' => 'api', 'action' => 'getProjects', '[method]' => array('GET')));
	Router::connect('/api/project/:projectid', array('controller' => 'api', 'action' => 'getProject', '[method]' => array('GET')));
	Router::connect('/api/project/:projectid/files', array('controller' => 'api', 'action' => 'getProjectFiles', '[method]' => array('GET')));
	Router::connect('/api/project', array('controller' => 'api', 'action' => 'updateProject', '[method]' => array('POST', 'PUT')));
	Router::connect('/api/project/:projectid', array('controller' => 'api', 'action' => 'updateProject', '[method]' => array('POST', 'PUT')));
	Router::connect('/api/project/:projectid', array('controller' => 'api', 'action' => 'removeProject', '[method]' => array('DELETE')));
	Router::connect('/api/project/:projectid/file', array('controller' => 'api', 'action' => 'uploadProjectFile', '[method]' => array('POST', 'PUT')));

	Router::connect('/api/project/:projectid/user', array('controller' => 'api', 'action' => 'updateUserProject', '[method]' => array('POST', 'PUT')));
	Router::connect('/api/project/:projectid/user/:userid', array('controller' => 'api', 'action' => 'removeUserProject', '[method]' => array('DELETE')));

	Router::connect('/api/content', array('controller' => 'api', 'action' => 'getContent', '[method]' => array('GET')));
	Router::connect('/api/content/:stage', array('controller' => 'api', 'action' => 'getContentStage', '[method]' => array('GET')));
	Router::connect('/api/content', array('controller' => 'api', 'action' => 'updateContentStage', '[method]' => array('PUT', 'POST')));

	Router::connect('/api/skills', array('controller' => 'api', 'action' => 'getSkills', '[method]' => array('GET')));
	Router::connect('/api/skill', array('controller' => 'api', 'action' => 'updateSkill', '[method]' => array('POST', 'PUT')));
	Router::connect('/api/skill/:id', array('controller' => 'api', 'action' => 'removeSkill', '[method]' => array('DELETE')));

	Router::connect('/api/activities', array('controller' => 'api', 'action' => 'getActivities', '[method]' => array('GET')));
	Router::connect('/api/activities/stage/:stage', array('controller' => 'api', 'action' => 'getActivitiesByStage', '[method]' => array('GET')));
	Router::connect('/api/activities/stage/:stage/:minscore', array('controller' => 'api', 'action' => 'getActivitiesByStage', '[method]' => array('GET')));
	Router::connect('/api/activities/skill/:skill', array('controller' => 'api', 'action' => 'getActivitiesBySkill', '[method]' => array('GET')));
	Router::connect('/api/activities/skill/:skill/:minscore', array('controller' => 'api', 'action' => 'getActivitiesBySkill', '[method]' => array('GET')));
	Router::connect('/api/activity/:activityid', array('controller' => 'api', 'action' => 'getActivity', '[method]' => array('GET')));
	Router::connect('/api/activity/:activityid', array('controller' => 'api', 'action' => 'updateActivity', '[method]' => array('PUT', 'POST')));
	Router::connect('/api/activity/:activityid/upload', array('controller' => 'api', 'action' => 'uploadActivityFile', '[method]' => array('PUT', 'POST')));
	Router::connect('/api/activity/:activityid', array('controller' => 'api', 'action' => 'removeActivity', '[method]' => array('DELETE')));
	
// PAGE ROUTES
	Router::connect('/login', array('controller' => 'pages', 'action' => 'login'));
	Router::connect('/logout', array('controller' => 'pages', 'action' => 'logout'));
	Router::connect('/home', array('controller' => 'pages', 'action' => 'home'));

	CakePlugin::routes();
	require CAKE . 'Config' . DS . 'routes.php';
