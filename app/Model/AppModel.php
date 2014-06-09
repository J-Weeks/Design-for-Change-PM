<?php
/**
 * Application model for Cake.
 *
 * This file is application-wide model file. You can put all
 * application-wide model-related methods here.
 *
 * PHP 5
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright 2005-2012, Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright 2005-2012, Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Model
 * @since         CakePHP(tm) v 0.2.9
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */

App::uses('Model', 'Model');

/**
 * Application model for Cake.
 *
 * Add your application-wide methods in the class below, your models
 * will inherit them.
 *
 * @package       app.Model
 */
class AppModel extends Model {

	public function afterFind($results, $primary = false) {
	  foreach ($results as $index => $model) {
	    $results[$index] = $model[$this->alias];
	    foreach ($results[$index] as $field => $value) {
	    	if (strpos($field, '_obj') > -1) {
	    		$oObj = json_decode($results[$index][$field], true);
	    		if (is_array($oObj)) {
	    			$results[$index][$field] = $oObj;
	    		}
	    	}
	    }
	  }
	  return $results;
	}
	
	public function afterSave($created) {	  
	  $this->data = $this->data[$this->alias];
	  return true;
	}

	public function beforeSave($model) {
	  foreach ($this->data[$this->alias] as $field => $value) {
	  	if (strpos($field, '_obj') > -1) {
	  		if ($this->data[$this->alias][$field] != '') {
	  			$this->data[$this->alias][$field] = json_encode($this->data[$this->alias][$field]);
	  		} else {
	  			$this->data[$this->alias][$field] = '';
	  		}
	  	}
	  }
		return true;
	}
	
	public function updateField($id, $field, $value) {
		$this->id = $id;
		return $this->saveField($field, $value);
	}

}