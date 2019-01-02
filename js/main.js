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
			console.log(user);
		});
	});
});