	</body>
	<script data-main="/dfcusa-pm/appsrc/src/config.js" src="/dfcusa-pm/js/require.js"></script>

	<div id="templatesLogin"><?php echo file_get_contents('http://' . $_SERVER['SERVER_NAME'] . '/dfcusa-pm/app/webroot/appsrc/src/templates/login.html') ?></div>
	<div id="templatesHome"><?php echo file_get_contents('http://' . $_SERVER['SERVER_NAME'] . '/dfcusa-pm/app/webroot/appsrc/src/templates/home.html') ?></div>
	<div id="templatesAdmin"><?php echo file_get_contents('http://' . $_SERVER['SERVER_NAME'] . '/dfcusa-pm/app/webroot/appsrc/src/templates/admin.html') ?></div>

	<div id="alertModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
		    <div class="modal-header">
		      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
		      <h4 class="modal-title"></h4>
		    </div>
		    <div class="modal-body">

				</div>
				<div class="modal-footer">
		      <button type="button" class="btn btn-default noButton" data-dismiss="modal">Cancel</button>
		      <button type="button" class="btn btn-primary yesButton"></button>
		    </div>
			</div>
		</div>
	</div>

	<script>
		window.oCurrentUser = <?php if ($currentUser != false) { echo json_encode($currentUser); } else { echo '""'; } ?>;
	</script>
</html>