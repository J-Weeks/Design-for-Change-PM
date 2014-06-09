<?php

class User extends AppModel {

  var $name = 'User';
  var $useTable = 'users';

  public function setCurrentUser($oUser, $resethash=false) {
    if ($oUser) {
      if (($oUser['security_hash'] == '') || ($resethash == true)) {
        $securityHash = md5($oUser['email'] . time());
        $this->updateField($oUser['id'], 'security_hash', $securityHash);
        $oUser['security_hash'] = $securityHash;
      }
			setcookie('user', $oUser['security_hash'], time()+60*60*3, '/', cookieBase, false, false);
		} else {
			setcookie('user', '', time()+60*60*3, '/', cookieBase, false, false);
		}
		return $oUser;
	}

	public function getCurrentUser () {
    $securityHash = isset($_GET['token']) ? $_GET['token'] : $_COOKIE['user'];
		$oUser = false;
		if ($securityHash != '') {
			$oUser = $this->findBySecurityHash($securityHash);
      $this->setCurrentUser($oUser, false);
		}
		
    if ($oUser) {
      Controller::loadModel('Organization');
      $oUser['organization'] = $this->Organization->findById($oUser['school_id']);
    }

		return $oUser;
	}

  public function scrubUser($oUser) {
    if ($oUser) {
      unset($oUser['security_hash']);
      unset($oUser['password']);
    }
    return $oUser;
  }
  
}