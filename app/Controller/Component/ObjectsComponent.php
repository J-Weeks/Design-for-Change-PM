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
		Controller::loadModel('File');

		if ($project) {
			$oUsers = array();
			$oUserProjects = $this->UserProject->find('all', array('conditions' => array('UserProject.project_id' => $project['id'])));
			foreach ($oUserProjects as $oUserProject) {
				$oUser = $this->User->findById($oUserProject['user_id']);
				if ($oUser) {
					if ($oUser['type'] == 'mentor') $oMentor = $this->User->scrubUser($oUser);
					array_push($oUsers, $this->User->scrubUser($oUser));
				}
			}
			$project['users'] = $oUsers;
			$project['mentor'] = $oMentor;
			$project['users_count'] = count($oUsers);

			$oFiles = $this->File->find('all', array('conditions' => array('File.project_id' => $project['id'])));
			$project['current_stage'] = '';
			foreach ($oFiles as $oFile) {
				if ($oFile['stage'] == 'feel') {
					if ($project['current_stage'] == '') $project['current_stage'] = 1;
				} else if ($oFile['stage'] == 'imagine') {
					if ($project['current_stage'] <= 1) $project['current_stage'] = 2;
				} else if ($oFile['stage'] == 'do') {
					if ($project['current_stage'] <= 2) $project['current_stage'] = 3;
				} else if ($oFile['stage'] == 'share') {
					if ($project['current_stage'] <= 3) $project['current_stage'] = 4;
				}
			}
		}

		return $project;
	}

	public function populateProjectFiles($project) {
		Controller::loadModel('File');
		return $this->File->findByProjectId($project['id']);
	}

	public function populateOrganization($organization) {
		if ($organization) {
			Controller::loadModel('Project');
			$oProjects = $this->Project->find('all', array('conditions' => array('Project.organization_id' => $organization['id'])));
			$organization['projects'] = array();
			foreach ($oProjects as $oProject) {
				$oProject = $this->populateProjectFull($oProject);
				array_push($organization['projects'], $oProject);

				foreach ($organization['users'] as &$user) {
					if ($oProject['mentor']['id'] == $user['id']) {
						if (!$user['projects']) $user['projects'] = array();
						$userProject = array();
						$userProject['id'] = $oProject['id'];
						$userProject['name'] = $oProject['name'];
						array_push($user['projects'], $userProject);
					}
				}
			}
		}
		return $organization;
	}

}