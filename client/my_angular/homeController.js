app.controller('HomeController', ['$scope', '$location', 'SynthFactory', function($scope, $location, SynthFactory){
	function getUser(){
		SynthFactory.getUser(function(data){
			$scope.user = data;
		});
	}
	// function getPosts(){
	// 	WallFactory.getPosts(function(data){
	// 		$scope.posts = data;
	// 	})
	// }
	// getPosts();
	getUser();
	// $scope.addPost = function(post){
	// 	WallFactory.addPost(post, getPosts);
	// 	$scope.newPost = {};
	// }
	// $scope.addComment = function(comment, post_id){
	// 	WallFactory.addComment(comment, post_id, getPosts);
	// }
}])
