<div id="projectHeader" class="hide"></div>

<?php echo $this->element('leftnav'); ?>

<div class="main_content">
  <section id="content">

  </section>
</div>

<script type="text/mustache-template" id="headerTemplate">
  <div class="header_top">
    <div class="container">
      <div class="inner_login">
        <ul>
          <li><a href="/home#profile">My Profile</a></li>
          <li><a href="/dfcusa-pm/logout" class="sign">Exit Portal</a></li>
          <li style="width: 20px"><img src="{{user.profilepic}}" class="profilePicSmall"></li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
      <div class="inner_logo"><a href="/"><img src="/images/inner_logo.png" width="196" height="93" alt="logo"></a></div>
    </div>
  </div>
  <nav class="inner_nav">
    <div class="container">
      <div class="inner_navigation">
        <ul>
          <li data-navigation="editorg"><a href="/home#projects" class="getstarted editorg">Edit Org</a></li>
          <li data-navigation="myprojects"><a href="/home#projects" class="getstarted myprojects">My Projects</a></li>
          <li data-navigation="allactivities"><a href="/home#activities" class="getstarted allactivities">All Activities</a></li>
        </ul>
        <div class="clear"></div>
      </div>
    </div>
  </nav>
</script>

<script type="text/mustache-template" id="adminHeaderTemplate">
  <div class="header_top">
    <div class="container">
      <div class="inner_login">
        <ul>
          <li><a href="/dfcusa-pm/logout" class="sign">Exit Portal</a></li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
      <div class="inner_logo"><a href="/"><img src="/images/inner_logo.png" width="196" height="93" alt="logo"></a></div>
    </div>
  </div>
  <nav class="inner_nav">
    <div class="container">
      <div class="inner_navigation">
        <ul>
          <li data-navigation="allprojects"><a href="#allprojects" class="home">Projects</a></li>
          <li data-navigation="allorganizations"><a href="#allorganizations" class="get">Organizations</a></li>
          <li data-navigation="allactivities"><a href="#allactivities" class="home">Activities</a></li>
          <li data-navigation="allusers"><a href="#allusers" class="home">Users</a></li>
          <li data-navigation="allactivities"><a href="#allactivities" class="home">Activities</a></li>
          <li data-navigation="content"><a href="#content" class="home">Content</a></li>
          <li data-navigation="skills"><a href="#skills" class="home">Skills</a></li>
        </ul>
        <div class="clear"></div>
      </div>
    </div>
  </nav>
</script>

<script type="text/mustache-template" id="editOrgTemplate">
<div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading">Panel heading</div>
  <div class="panel-body">
    <p>Below are members of {{org.name}}</p>
  </div>

  <!-- Table -->
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Projects</th>
      </tr>
    </thead>
  <tbody>
    {{#each org.users}}
    <tr>
      <td><img src="{{profilepic}}" heigh="40px" width="40px">{{first_name}} {{last_name}}</td>
      <td>{{location}}</td>
      {{#each projects}}
        <td>{{name}}</td>
      {{/each}}
    </tr>
    {{/each}}
  </tbody>
  </table>
</div>
</script>
