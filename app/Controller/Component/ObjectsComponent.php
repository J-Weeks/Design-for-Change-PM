<?php

class ObjectsComponent extends Component {

	public function populateUser($user) {
		Controller::loadModel('User');
		Controller::loadModel('Project');
		Controller::loadModel('UserProject');
		Controller::loadModel('Organization');

		if ($user) {
			$oUserProjects = $this->UserProject->find('all', array('conditions' => array('UserProject.user_id' => $user['id'])));
			$aProjects = array();
			foreach ($oUserProjects as $oUserProject) array_push($aProjects, $oUserProject['project_id']);
			$user['projects'] = $this->Project->find('all', array('conditions' => array('Project.id' => $aProjects)));
			$user['organization'] = $this->Organization->findById($user['organization_id']);
			$oProjects = array();
			foreach ($user['projects'] as $oProject) {
				if ($oProject['organization_id'] == $user['organization_id']) array_push($oProjects, $this->populateProject($oProject));
			}
			$user['projects'] = $oProjects;
		}

		return $user;
	}

	public function populateProject($project) {
		Controller::loadModel('UserProject');
		$project['users_count'] = $this->UserProject->find('count', array('conditions' => array('UserProject.project_id' => $project['id'])));
		return $project;
	}

	public function populateProjectFull($project) {
		Controller::loadModel('User');
		Controller::loadModel('UserProject');

		if ($project) {
			$oUsers = array();
			$oUserProjects = $this->UserProject->find('all', array('conditions' => array('UserProject.project_id' => $project['id'])));
			foreach ($oUserProjects as $oUserProject) {
				$oUser = $this->User->findById($oUserProject['user_id']);
				if ($oUser) {
					array_push($oUsers, $this->User->scrubUser($oUser));
				}
			}
			$project['users'] = $oUsers;
			$project['users_count'] = count($oUsers);
		}

		return $project;
	}

	public function populateProjectFiles($project) {
		Controller::loadModel('File');
		return $this->File->findByProjectId($project['id']);
	}

	public function populateOrganization($organization) {
		Controller::loadModel('Project');
		$oProjects = $this->Project->find('all', array('conditions' => array('Project.organization_id' => $organization['id'])));
		$organization['projects'] = array();
		foreach ($oProjects as $oProject) {
			$oProject = $this->populateProject($oProject);
			array_push($organization['projects'], $oProject);
		}
		return $organization;
	}

}