<?php 
	echo $this->element('header');
	echo $this->fetch('content');
	echo $this->element('footer');
	echo $this->element('sql_dump');
?>
