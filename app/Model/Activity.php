<?php

class Activity extends AppModel {

  var $name = 'Activity';
  var $useTable = 'activities';

  function getFullActivity($activity, $projectid) {
  	Controller::loadModel('User');
  	Controller::loadModel('ActivityComment');
    Controller::loadModel('Skill');
    Controller::loadModel('File');

  	$activity['user'] = $this->User->scrubUser($this->User->findById($activity['user_id']));

    $aSkills = explode(',', $activity['skills']);
    $activity['all_skills'] = $aSkills;
    $activity['skills'] = array();
    $oSkills = $this->Skill->find('all');
    foreach ($oSkills as $oSkill) 
      foreach ($aSkills as $aSkill) 
        if ($aSkill == $oSkill['skill']) 
          array_push($activity['skills'], $oSkill);
  	$activity['comments'] = $this->ActivityComment->find('all', array('conditions' => array('ActivityComment.activity_id' => $activity['id'])));
  	$activity['comments_count'] = count($activity['comments']);

    if ($projectid) {
      $activity['file'] = $this->File->find('first', array('conditions' => array('File.project_id' => $projectid, 'File.activity_id' => $activity['id'])));
    }

  	return $activity;
  }

}