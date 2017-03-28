app.controller('LoginController', ['$scope', '$location', 'SynthFactory', function($scope, $location, SynthFactory){
	$scope.register = function(user){
		SynthFactory.register(user);
	}
	$scope.login = function(user){
		SynthFactory.login(user);
	}
	// function currentUser(){
	// 	WallFactory.currentUser(function(data){
	// 		$scope.user = data;
	// 	});
	// }
	// currentUser();
}])
