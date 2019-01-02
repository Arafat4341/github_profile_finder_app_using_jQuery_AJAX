$(document).ready(function(){
	$('#searchUser').on('keyup', function(e){
		let username = e.target.value;

		$.ajax({
			url: 'https://api.github.com/users/'+username,
			data: {
				client_id: 'd6056f0d9af078f07773',
				client_secret: '8382d760513f97a0b61300c98679e0f98ae6b09a'
			}
		}).done(function(user){
			$('#profile').html(`
				<div class="panel panel-default">
				  <div class="panel-heading">
				  	<h3>${user.name}</h3>
				  </div>
				  <div class="panel-body">
				    <div class="row">
				    	<div class="col-md-3">
				    		<img class="thumbnail avatar" src="${user.avatar_url}">
				    		<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
				    	</div>
				    	<div class="col-md-9">
				    		<span class="label label-default">Public Repos: ${user.public_repos}</span>
							<span class="label label-primary">Public Gists: ${user.public_gists}</span>
							<span class="label label-success">Followers: ${user.followers}</span>
							<span class="label label-info">Following: ${user.following}</span>
							<br><br>

							<ul class="list-group">
								<li class="list-group-item">Company: ${user.company}</li>
								<li class="list-group-item">Website/blog: ${user.blog}</li>
								<li class="list-group-item">Location: ${user.location}</li>
								<li class="list-group-item">Member since: ${user.created_at}</li>
							</ul>
				    	</div>
				    </div>
				  </div>
				</div>
			`);
		});
	});
});