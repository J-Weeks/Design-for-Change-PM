<?php

App::uses('AppController', 'Controller');

class ApiController extends AppController {

  public $name = 'UserApi';
  public $uses = array('User', 'Project', 'UserProject', 'Organization', 'Content', 'Activity');
  public $components = array('Objects', 'Aws');

  var $oData = array();
  var $oCurrentUser = array();

  function beforeFilter() {
    global $oData;
    global $oCurrentUser;

    $this->autoRender = false;
    $this->response->type('application/json');
    $oData = $this->request->input('json_decode', 'true');

    $isCreateUserRequest = (Router::url() === '/dfcusa-pm/api/user/login');

    $oCurrentUser = $this->User->getCurrentUser();

    if ($oCurrentUser) {
      $oCurrentUser = $this->Objects->populateUser($oCurrentUser);
    }

    if (!$oCurrentUser && !$isCreateUserRequest) {
      echo $this->prepareResponse(false, 401, 'unauthorized');
      $this->_stop();
    }
  }

  protected function prepareResponse($object, $code, $msg) {
    if ($object == false && !is_array($object)) {
      if ($code != '302') {
        header('HTTP/1.0 ' . $code . ' ' . $msg, true, $code);
      } else {
        header('Location: http://' . $_SERVER['SERVER_NAME'] . $msg, true, 302);
      }
      die();
    } else {
      header("Content-type: application/json");
      return json_encode($object);
    }
  }

  public function loginUser() {
    global $oCurrentUser;
    global $oData;

    $oFoundUser = $this->User->findByUsername($oData['username']);
    if (($oFoundUser) && ($oFoundUser['password'] == $oData['password'])) {
    //if (md5($oFoundUser['password']) == $oData['password']) {
      $this->User->setCurrentUser($oFoundUser);
    } else {
      $oFoundUser = false;
    }
    
    echo $this->prepareResponse($this->User->scrubUser($this->Objects->populateUser($oFoundUser)), 531, 'access denied'); 
  }

  public function getCurrentUser() {
    global $oData;    
    global $oCurrentUser;

    echo $this->prepareResponse($this->User->scrubUser($this->Objects->populateUser($oCurrentUser)), 531, 'access denied'); 
  }

  public function updateCurrentUser() {
    global $oData;
    global $oCurrentUser;

    $oData['id'] = $oCurrentUser['id'];
    $this->User->save($oData);
    $oCurrentUser = $this->User->getCurrentUser();
    echo $this->prepareResponse($this->User->scrubUser($this->Objects->populateUser($oCurrentUser)), 531, 'access denied'); 
  }

  public function getUsers() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      $oUsers = $this->User->find('all');
      foreach ($oUsers as &$oUser) {
        $oUser = $this->User->scrubUser($this->Objects->populateUser($oUser));
      }
    }

    echo $this->prepareResponse($oUsers, 531, 'access denied');
  }

  public function getUser() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      $oReturn = $this->User->findById($this->params['userid']);
    } else if ($oCurrentUser['type'] == 'mentor') {
      $oUser = $this->User->findById($this->params['userid']);
      if ($oUser['organization_id'] == $oCurrentUser['organization_id']) $oReturn = $oUser;
    } else {
      $aProjects = array();
      foreach ($oCurrentUser['projects'] as $oProject) array_push($aProjects, $oProject['id']);
      if (count($aProjects) > 0) {
        $oFoundUserProject = $this->UserProject->find('first', array('conditions' => array('UserProject.user_id' => $this->params['userid'], 'UserProject.project_id' => $aProjects)));
        if ($oFoundUserProject) {
          $oReturn = $this->User->findById($this->params['userid']);
        }
      }
    }

    echo $this->prepareResponse($this->User->scrubUser($this->Objects->populateUser($oReturn)), 531, 'access denied'); 
  }

  public function updateUser() {
    global $oData;
    global $oCurrentUser;

    //if ($oData['password'] != '') $oData['password'] = md5($oData['password']);

    if (($oCurrentUser['id'] == $oData['id']) || ($oCurrentUser['type'] == 'mentor') || ($oCurrentUser['type'] == 'admin')) {
      if ($this->params['userid'] != 'new') {
        $oUser = $this->User->findById($oData['id']);
        if (($oUser['organization_id'] == $oCurrentUser['organization_id']) || ($oCurrentUser['type'] == 'admin')) {
          $this->User->id = $oData['id'];
          $oReturn = $this->User->save($oData);
          $oReturn = $this->User->findById($oReturn['id']);
        }
      } else {
        $oData['organization_id'] = $oCurrentUser['organization_id'];
        $oData['security_hash'] = md5($oData['email'] . time());
        $this->User->create();
        $oReturn = $this->User->save($oData);
        $oReturn = $this->User->findBySecurityHash($oData['security_hash']);
      }
    }

    echo $this->prepareResponse($this->User->scrubUser($this->Objects->populateUser($oReturn)), 531, 'access denied'); 
  }

  public function removeUser() {
    global $oData;
    global $oCurrentUser;

    if (($oCurrentUser['id'] != $this->params['userid']) && (($oCurrentUser['type'] == 'mentor') || ($oCurrentUser['type'] == 'admin'))) {
      if ($oCurrentUser['type'] == 'admin') {
        $this->User->delete($this->params['userid']);
      } else {
        $oUser = $this->User->findById($this->params['userid']);
        if ($oUser['organization_id'] == $oCurrentUser['organization_id']) {
          $this->User->delete($this->params['userid']);
        }
      }
    }

    echo $this->prepareResponse($this->User->scrubUser($this->Objects->populateUser($oReturn)), 531, 'access denied'); 
  }

  public function getOrganizations() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      $oOrganizations = $this->Organization->find('all');
    }

    echo $this->prepareResponse($oOrganizations, 531, 'access denied');
  }

  public function getOrganization() {
    global $oData;
    global $oCurrentUser;

    if (($oCurrentUser['organization_id'] == $this->params['organizationid']) || ($oCurrentUser['type'] == 'admin')) {
      $oOrganization = $this->Organization->findById($this->params['organizationid']);
    }

    echo $this->prepareResponse($this->Objects->populateOrganization($oOrganization), 531, 'access denied'); 
  }

  public function updateOrganization() {
    global $oData;
    global $oCurrentUser;

    if (($oCurrentUser['type'] == 'mentor') && ($oCurrentUser['organization_id'] == $oData['id'])) {
      $oOrganization = $this->Organization->save($oData);
    } else if ($oCurrentUser['type'] == 'admin') {
      if ($Data['id']) {
        $this->Organization->id = $oData['id'];
      } else {
        $this->Organization->create();
      }
      $oOrganization = $this->Organization->save($oData);
    }

    $oCurrentUser = $this->User->getCurrentUser();
    echo $this->prepareResponse($oOrganization, 531, 'access denied'); 
  }

  public function removeOrganization() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      $this->Organization->delete($this->params['organizationid']);
    }

    $oCurrentUser = $this->User->getCurrentUser();
    echo $this->prepareResponse($this->User->scrubUser($this->Objects->populateUser($oCurrentUser)), 531, 'access denied'); 
  }

  public function getProjects() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      $oProjects = $this->Project->find('all');
      foreach ($oProjects as &$oProject) {
        $oProject = $this->Objects->populateProjectFull($oProject);
        $oProject['organization'] = $this->Organization->findById($oProject['users'][0]['organization_id']);
      }
    }

    echo $this->prepareResponse($oProjects, 531, 'access denied'); 
  }

  public function getProject() {
    global $oData;
    global $oCurrentUser;

    foreach ($oCurrentUser['projects'] as $oProject) {
      if ($oProject['id'] == $this->params['projectid']) {
        $oReturn = $this->Objects->populateProjectFull($oProject);
      }
    }

    echo $this->prepareResponse($oReturn, 531, 'access denied'); 
  }

  public function getProjectFiles() {
    global $oData;
    global $oCurrentUser;

    foreach ($oCurrentUser['projects'] as $oProject) {
      if ($oProject['id'] == $this->params['projectid']) {
        $oReturn = $this->Objects->populateProjectFiles($oProject);
      }
    }

    echo $this->prepareResponse($oReturn, 531, 'access denied'); 
  }

  public function updateProject() {
    global $oData;
    global $oCurrentUser;

    $bReturn = true;
    if ($oCurrentUser['type'] == 'mentor') {
      if ($oData['id'] == '') {
        $oExistingProject = $this->Project->find('first', array('conditions' => array('Project.name' => $oData['name'], 'Project.organization_id' => $oCurrentUser['organization_id'])));
        if (!$oExistingProject) {
          $this->Project->create();
          $oData['organization_id'] = $oCurrentUser['organization_id'];
          $oProject = $this->Project->save($oData);
          $this->UserProject->create();
          $this->UserProject->save(array('user_id' => $oCurrentUser['id'], 'project_id' => $oProject['id']));
          $oReturn = $this->Project->find('first', array('conditions' => array('Project.name' => $oData['name'], 'Project.organization_id' => $oCurrentUser['organization_id'])));
        } else {
          $oReturn = false;
        }
      } else {
        foreach ($oCurrentUser['projects'] as $oProject) {
          if ($oProject['id'] == $oData['id']) {
            $this->Project->save($oData);
            $oReturn = $this->Objects->populateProject($this->Project->findById($oData['id']));
          }
        }
      }
    }

    echo $this->prepareResponse($oReturn, 531, 'access denied'); 
  }

  public function removeProject() {
    global $oData;
    global $oCurrentUser;

    if (($oCurrentUser['type'] == 'mentor') || ($oCurrentUser['type'] == 'admin')) {
      foreach ($oCurrentUser['projects'] as $oProject) {
        if ($oProject['id'] == $this->params['projectid']) {
          $bContinue = true;
        }
      }

      if ($oCurrentUser['type'] == 'admin') $bContinue = true;

      if ($bContinue) {
        $this->Project->delete($this->Project->findById($oProject['id']));
        $oUserProjects = $this->UserProject->find('all', array('conditions' => array('UserProject.project_id' => $oProject['id'])));
        foreach ($oUserProjects as $oUserProject) $this->UserProject->delete($oUserProject['id']);
      }
    }

    $oCurrentUser = $this->User->getCurrentUser();
    echo $this->prepareResponse($this->User->scrubUser($this->Objects->populateUser($oCurrentUser)), 531, 'access denied'); 
  }

  public function updateUserProject() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'mentor') {
      $oProject = $this->Project->findById($this->params['projectid']);
      if ($oProject) {
        $oUser = $this->User->findById($oData['user_id']);
        $oMentorProject = $this->UserProject->find('first', array('conditions' => array('UserProject.user_id' => $oCurrentUser['id'], 'UserProject.project_id' => $oProject['id'])));
        if ($oMentorProject) {
          if (($oUser) && ($oUser['organization_id'] == $oProject['organization_id'])) {
            $oData['project_id'] = $this->params['projectid'];
            if ($oData['id']) {
              $this->UserProject->id = $oData['id'];
              $this->UserProject->save($oData);
            } else {
              $this->UserProject->create();
              $this->UserProject->save($oData);
            }
          }
        }
      }
    }

    $oCurrentUser = $this->User->getCurrentUser();
    echo $this->prepareResponse($this->User->scrubUser($this->Objects->populateUser($oCurrentUser)), 531, 'access denied'); 
  }

  public function removeUserProject() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'mentor') {
      foreach ($oCurrentUser['projects'] as $oProject) {
        if ($oProject['id'] == $this->params['projectid']) {
          $oUserProject = $this->UserProject->find('first', array('conditions' => array('UserProject.project_id' => $this->params['projectid'], 'UserProject.user_id' => $this->params['userid'])));
          if ($oUserProject) $this->UserProject->delete($oUserProject['id']);
        }
      }
    }

    $oCurrentUser = $this->User->getCurrentUser();
    echo $this->prepareResponse($this->User->scrubUser($this->Objects->populateUser($oCurrentUser)), 531, 'access denied'); 
  }

  public function getContentStage() {
    global $oData;
    global $oCurrentUser;

    echo $this->prepareResponse($this->Content->find('first', array('conditions' => array('Content.stage' => $this->params['stage']))), 531, 'access denied');
  }

  public function updateContentStage() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      $oContent = $this->Content->find('first', array('conditions' => array('Content.stage' => $oData['stage'])));
      unset($oData['id']);
      if ($oContent) {
        $this->Content->id = $oContent['id'];
      } else {
         $this->Content->create();
      }
      $oContent = $this->Content->save($oData);
    }

    echo $this->prepareResponse($oContent, 531, 'access denied'); 
  }

  public function getActivities() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      $oActivities = $this->Activity->find('all');
    }

    echo $this->prepareResponse($oActivities, 531, 'access denied');
  }

  public function getActivity() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      $oActivity = $this->Activity->findById($this->params['activityid']);
    }

    echo $this->prepareResponse($oActivity, 531, 'access denied'); 
  }

  public function updateActivity() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      if ($this->params['activityid'] != 'new') {
        $oActivity = $this->Activity->findById($this->params['activityid']);
        if ($oActivity) {
          $this->Activity->id = $oActivity['id'];
          $oActivity = $this->Activity->save($oData);
        }
      } else {
        $oActivity = $this->Activity->create();
        $oActivity = $this->Activity->save($oData);
      }
    }

    echo $this->prepareResponse($oActivity, 531, 'access denied');
  }

  public function uploadActivityFile() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      if ($this->params['activityid'] != 'new') {
        $oActivity = $this->Activity->findById($this->params['activityid']);
        if ($oActivity) {
          $oReturn = $this->Aws->uploadFile($_FILES['file']['name'], $_FILES['file']['tmp_name'], 'dfcusa_pm/content');
          $oReturn = array();
          $oReturn['file'] = 'https://dfcusa_pm.s3.amazonaws.com/content/' . $_FILES['file']['name'];
          $this->Activity->id = $oActivity['id'];
          $this->Activity->saveField('pdf', 'https://dfcusa_pm.s3.amazonaws.com/content/' . $_FILES['file']['name']);
        }
      }
    }

    echo $this->prepareResponse($oReturn, 531, 'access denied');
  }

  public function removeActivity() {
    global $oData;
    global $oCurrentUser;

    if ($oCurrentUser['type'] == 'admin') {
      $oActivity = $this->Activity->delete($this->params['activityid']);
    }

    echo $this->prepareResponse($oCurrentUser, 531, 'access denied');
  }

  public function getActivitiesByStage() {
    global $oData;
    global $oCurrentUser;

    $oReturn = array();
    $oActivities = $this->Activity->find('all');
    foreach ($oActivities as $oActivity) {
      $aStages = explode(',', $oActivity['stages']);
      if (in_array($this->params['stage'], $aStages)) {
        if ($this->params['minscore'] != undefined) {
          if ($oActivity['score'] >= $this->params['minscore']) array_push($oReturn, $this->Activity->getFullActivity($oActivity));
        } else {
          array_push($oReturn, $this->Activity->getFullActivity($oActivity));
        }
      }
    }

    echo $this->prepareResponse($oReturn, 531, 'access denied'); 
  }

  public function getActivitiesBySkill() {
    global $oData;
    global $oCurrentUser;

    $oReturn = array();
    $oActivities = $this->Activity->find('all');
    foreach ($oActivities as $oActivity) {
      $aSkills = explode(',', $oActivity['skills']);
      if (in_array($this->params['skill'], $aSkills)) {
        if ($this->params['minscore'] != undefined) {
          if ($oActivity['score'] >= $this->params['minscore']) array_push($oReturn, $this->Activity->getFullActivity($oActivity));
        } else {
          array_push($oReturn, $this->Activity->getFullActivity($oActivity));
        }
      }
    }

    echo $this->prepareResponse($oReturn, 531, 'access denied'); 
  }

}