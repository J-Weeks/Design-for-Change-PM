<section class="vbox">
  <header class="header bg-black navbar navbar-inverse pull-in" id="header_container">
  </header>
  <section>
    <section class="hbox stretch">
      <aside class="aside bg-dark dk" id="navbar_fids">
        <section class="vbox">
          <section class="scrollable">
            <div class="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="5px">
              <nav class="nav-primary hidden-xs" data-ride="collapse">
                <ul class="nav leftNav">
                  <li id="menu_introduction">
                    <a href="index.html">
                      <i class="fa fa-book"></i>
                      <span>Introduction</span>
                    </a>
                  </li>
                  <li id="menu_feel">
                    <a href="index.html">
                      <i class="fa fa-eye"></i>
                      <span>Feel</span>
                    </a>
                  </li>
                  <li id="menu_imagine">
                    <a href="index.html">
                      <i class="fa fa-lightbulb-o"></i>
                      <span>Imagine</span>
                    </a>
                  </li>
                  <li id="menu_do">
                    <a href="index.html">
                      <i class="fa fa-gears"></i>
                      <span>Do</span>
                    </a>
                  </li>
                  <li id="menu_share">
                    <a href="index.html">
                      <i class="fa fa-camera"></i>
                      <span>Share</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </section>
      </aside>
      <section id="content">
        
      </section>
      <aside class="bg-light lter b-l aside-sm hide">
        <div class="wrapper">aside content</div>
      </aside>
    </section>
  </section>
  <footer class="footer b-t bg-white-only" style="height: 50px">
    <p style="font-weight: bold; font-size: 11pt">The Design for Change Lab</p>
    <div class="input-group" style="width: 300px; position: absolute; left: 240px; top: 10px">
      <input type="text" class="input-sm form-control input-s-sm" placeholder="Ask a question...">
      <div class="input-group-btn">
        <button class="btn btn-sm btn-white"><i class="fa fa-search"></i></button>
      </div>
    </div>
    <p class="m-t-sm pull-right" style="margin-top: 8px">
      <a href="#" class="btn btn-rounded btn-twitter btn-icon"><i class="fa fa-twitter"></i></a>
      <a href="#" class="btn btn-rounded btn-facebook btn-icon"><i class="fa fa-facebook"></i></a>
      <a href="#" class="btn btn-rounded btn-gplus btn-icon"><i class="fa fa-youtube-play"></i></a>
    </p>
    <p class="pull-right" style="font-size: 7pt; margin-top: 30px; margin-right: 20px">Copyright &copy; Design For Change USA 2014</p>
  </footer>
</section>


<script type="text/mustache-template" id="headerTemplate">
  <div class="navbar-header nav-bar aside dk">
     <a class="btn btn-link visible-xs" data-toggle="class:show" data-target=".nav-primary">
       <i class="fa fa-bars"></i>
     </a>
     <a href="#" class="nav-brand" data-toggle="fullscreen"><img src="images/dfc_logo_navbar.png"></a>
     <a class="btn btn-link visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
       <i class="fa fa-comment-o"></i>
     </a>
   </div>
   <div class="projectName" id="project_name">Project Name</div>
   <div class="collapse navbar-collapse pull-right" id="main_menu">
      <?php if ($currentUser['type'] == 'mentor') { ?>
        <ul class="nav navbar-nav">
         <li class="dropdown">
           <a href="#projects">
             <i class="fa fa-flask text-white"></i>
             <span class="text-white">My Projects</span>
           </a>
         </li>
         <li class="dropdown">
           <a href="#activities">
             <i class="fa fa-list-alt text-white"></i>
             <span class="text-white">Activities</span>
           </a>
         </li>
        </ul>
      <?php } else { ?>
        <ul class="nav navbar-nav">
         <li class="dropdown">
           <a href="#allprojects">
             <i class="fa fa-flask text-white"></i>
             <span class="text-white">All Projects</span>
           </a>
         </li>
         <li class="dropdown">
           <a href="#allorganizations">
             <i class="fa fa-briefcase text-white"></i>
             <span class="text-white">Organizations</span>
           </a>
         </li>
         <li class="dropdown">
           <a href="#allusers">
             <i class="fa fa-group text-white"></i>
             <span class="text-white">Users</span>
           </a>
         </li>
         <li class="dropdown">
           <a href="#allactivities">
             <i class="fa fa-list-alt text-white"></i>
             <span class="text-white">Activities</span>
           </a>
         </li>
         <li class="dropdown">
           <a href="#curriculum">
             <i class="fa fa-book text-white"></i>
             <span class="text-white">Curriculum</span>
           </a>
         </li>
        </ul>
      <?php } ?>
     <ul class="nav navbar-nav navbar-right">
       <li class="hidden-xs">
         <a href="#" class="dropdown-toggle dk" data-toggle="dropdown">
           <i class="fa fa-bell-o text-white"></i>
           <span class="badge up bg-danger m-l-n-sm">2</span>
         </a>
         <section class="dropdown-menu animated fadeInUp input-s-lg">
           <section class="panel bg-white">
             <header class="panel-heading">
               <strong>You have <span class="count-n">2</span> notifications</strong>
             </header>
             <div class="list-group">
               <a href="#" class="media list-group-item">
                 <span class="pull-left thumb-sm">
                   <img src="{{user.profilepic}}" alt="John said" class="img-circle">
                 </span>
                 <span class="media-body block m-b-none">
                   Use awesome animate.css<br>
                   <small class="text-muted">28 Aug 13</small>
                 </span>
               </a>
               <a href="#" class="media list-group-item">
                 <span class="media-body block m-b-none">
                   1.0 initial released<br>
                   <small class="text-muted">27 Aug 13</small>
                 </span>
               </a>
             </div>
             <footer class="panel-footer text-sm">
               <a href="#" class="pull-right"><i class="fa fa-cog"></i></a>
               <a href="#">See all the notifications</a>
             </footer>
           </section>
         </section>
       </li>
       <li class="dropdown">
         <a href="#" class="dropdown-toggle aside-sm dker" data-toggle="dropdown">
           <span class="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
             <img src="{{user.profilepic}}">
           </span>
           {{user.first_name}}<b class="caret"></b>
         </a>
         <ul class="dropdown-menu animated fadeInLeft">
           <li>
             <a href="#profile">Your Profile</a>
           </li>
           <li>
             <a href="#organization">Your Organization</a>
           </li>
           <li>
             <a href="http://">Help</a>
           </li>
           <li>
             <a href="/logout">Logout</a>
           </li>
         </ul>
       </li>
     </ul>
   </div>
</script>