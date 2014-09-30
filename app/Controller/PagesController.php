<?php

App::uses('AppController', 'Controller');

class PagesController extends AppController {

	public $uses = array('User', 'Skill');
	public $components = array('Objects');

	var $oCurrentUser = array();

	function beforeFilter() {
	  global $oData;
	  global $oCurrentUser;

	  $this->set('title', 'Design for Change USA');
	  $oCurrentUser = $this->User->getCurrentUser();
	  if ($oCurrentUser) {
	  	$oCurrentUser = $this->Objects->populateUser($oCurrentUser);
  	  $this->User->id = $oCurrentUser['id'];
  	  $this->User->saveField('lastactive_timestamp', time());
	  } else {
	  	if ($_SERVER['REQUEST_URI'] != '/dfcusa-pm/pages/login') $this->redirect('login');
	  }

	  $oSkills = $this->Skill->find('all');
	  $this->set('skills', $oSkills);

	  $this->set('currentUser', $oCurrentUser);
	}

	public function login() {
		global $oCurrentUser;

		if ($oCurrentUser) $this->redirect('/home');
	}

	public function logout() {
		$this->User->setCurrentUser(false);
		$this->redirect('/login');
	}

	public function home() {
		global $oCurrentUser;
		//if (!$oCurrentUser) $this->redirect('/login');
		$this->render('dashboard');
	}
}
