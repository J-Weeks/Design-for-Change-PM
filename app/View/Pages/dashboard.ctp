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
          <li data-navigation="editorg"><a href="/home#editmentor" class="getstarted editorg">My Organization</a></li>
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
  <div class="panel-heading">{{org.name}}</div>
  <div class="panel-body">
    <p>Below are members of {{org.name}}</p>
    <button type="button" class="btn btn-success btn-sm emailModal">Invite Members</button>
  </div>

  <!-- Table -->
{{#if_eq masterMentor 0}}
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
    <tr class= {{id}}>
      <td><img src="{{profilepic}}" heigh="40px" width="40px">{{first_name}} {{last_name}}</td>
      <td>{{location}}</td>
      {{#each projects}}
        <td>
          <a href="#project/{{id}}"><button type="button" class="btn btn-primary btn-sm gotoProject" value="{{id}}">{{name}}</button></a>
        </td>
      {{/each}}
    </tr>
    {{/each}}
  </tbody>
  </table>
</div>
<p style="font-size: 10pt; margin-left: 20px" class='gHome'>< back to home</p>
{{/if_eq}}

{{#if_eq masterMentor 1}}
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th></th>
        <th>Location</th>
        <th>Projects</th>
        <th>last row</th>
      </tr>
    </thead>
  <tbody>
    {{#each org.users}}
    <tr>
      <td>
        <img src="{{profilepic}}" heigh="40px" width="40px">{{first_name}} {{last_name}}
      </td>
      <td>
        <button type="button" class="btn btn-success btn-sm editMemberModal">Edit Member</button>
        <button type="button" class="btn btn-primary btn-sm deleteMentor" value="{{id}}">Delete</button>
      </td>
      <td>{{location}}</td>
      {{#each projects}}
        <td>
          <a href="#project/{{id}}"><button type="button" class="btn btn-primary btn-sm gotoProject" value="{{id}}">{{name}}</button></a>
          <button type="button" class="btn btn-primary btn-sm delProject"  value="{{../id}}">Delete</button>
        </td>
      {{/each}}
    </tr>
    {{/each}}
  </tbody>
  </table>
</div>
<p style="font-size: 10pt; margin-left: 20px" class='gHome'>< back to home</p>
{{/if_eq}}

<div id="emailModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Please enter the requested information below</h4>
            </div>
            <div class="modal-body">
          <form class="contact" name="contact">
                <input type="text" class="form-control" placeholder="Your Name" aria-describedby="basic-addon1">
                <br>
                <label class="label" for="email">Your E-mail</label>
                <input type="text" class="form-control" placeholder="Recipient Email" aria-describedby="basic-addon1"><br>
        </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</div>

</script>
