	</body>
	<script data-main="/appsrc/src/config.js" src="/js/require.js"></script>

	<div id="templatesLogin"><?php echo file_get_contents('http://' . $_SERVER['SERVER_NAME'] . '/dfcusa-pm/app/webroot/appsrc/src/templates/login.html') ?></div>
	<div id="templatesHome"><?php echo file_get_contents('http://' . $_SERVER['SERVER_NAME'] . '/dfcusa-pm/app/webroot/appsrc/src/templates/home.html') ?></div>

	<script>
		window.oCurrentUser = <?php if ($currentUser != false) { echo json_encode($currentUser); } else { echo '""'; } ?>;
	</script>
</html>