<?php

class Activity extends AppModel {

  var $name = 'Activity';
  var $useTable = 'activities';

  function getFullActivity($activity) {
  	Controller::loadModel('User');
  	Controller::loadModel('ActivityComment');
  	$activity['user'] = $this->User->scrubUser($this->User->findById($activity['user_id']));
  	$activity['skills'] = explode(',', $activity['skills']);
  	$activity['comments'] = $this->ActivityComment->find('all', array('conditions' => array('ActivityComment.activity_id' => $activity['id'])));
  	$activity['comments_count'] = count($activity['comments']);
  	return $activity;
  }

}