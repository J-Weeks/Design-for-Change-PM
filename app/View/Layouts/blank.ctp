<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8">
    <title>Design for Change USA</title>

    <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png">
      
    <!--[if lt IE 9]>
    <script type="text/javascript">
      document.createElement("header");
      document.createElement("nav");
      document.createElement("section");
      document.createElement("article");
      document.createElement("aside");
      document.createElement("footer");
    </script>

    <!--[if IE]>
      <style type="text/css">.pie, #navigation ul li a, .inner_young a, .inner_tools ul li, .inner_tools ul li h3, .inner_how_do a, .label ul li input, .label ul li .submit, .inner_login ul li a  {behavior:url(PIE.htc);}

      .inner_banner { filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/banner_img.png',sizingMethod='scale'); }
      </style>
      <![endif]-->

      <link rel="stylesheet" href="/dfcusa-pm/css/bootstrap.css" type="text/css" />
      <link rel="stylesheet" href="/dfcusa-pm/css/animate.css" type="text/css" />
      <link rel="stylesheet" href="/dfcusa-pm/css/font-awesome.min.css" type="text/css" />
      <link rel="stylesheet" href="/dfcusa-pm/css/font.css" type="text/css" />
      <link rel="stylesheet" href="/dfcusa-pm/js/calendar/bootstrap_calendar.css" type="text/css" />
<!--       <link rel="stylesheet" href="/dfcusa-pm/css/app.css" type="text/css" />   -->

      <link rel="stylesheet" href="/dfcusa-pm/js/hubspot-messenger/css/messenger.min.css" type="text/css" />
      <link rel="stylesheet" href="/dfcusa-pm/js/fuelux/fuelux.css" type="text/css" />

      <!--[if lt IE 9]>
        <script src="js/ie/respond.min.js" cache="false"></script>
        <script src="js/ie/html5.js" cache="false"></script>
        <script src="js/ie/fix.js" cache="false"></script>
      <![endif]-->
      <!-- <link rel="stylesheet" type="text/css"  href="/dfcusa-pm/css/style.css" id="skin-switcher" > -->
      <!-- <link rel="stylesheet" type="text/css"  href="/dfcusa-pm/css/dfcusa_pm.css" id="skin-switcher" > -->
      <link href="/dfcusa-pm/css/style.css" rel="stylesheet" type="text/css" media="all">
      
      <!-- <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'> -->
  </head>

  <body>

    <div class="wrapper">

      <?php echo $this->fetch('content'); ?>
          
    </div>

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
    window.oSkills = <?php if ($skills != false) { echo json_encode($skills); } else { echo '""'; } ?>;
  </script>

</html>