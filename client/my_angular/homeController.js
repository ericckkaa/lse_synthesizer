app.controller('HomeController', ['$scope', '$location', 'SynthFactory', function($scope, $location, SynthFactory){
	function getUser(){
		SynthFactory.getUser(function(data){
			$scope.user = data;
		});
	}
	getUser();

	function getYourPatches(){
		SynthFactory.getYourPatches(function(data){
			$scope.patches = data;
		})
	}
	getYourPatches();

	function getTheirPatches(){
		SynthFactory.getTheirPatches(function(data){
			$scope.patches = data;
		})
	}
	getTheirPatches();

	$scope.addPatch = function(patch){
		SynthFactory.addPatch(patch, getPatches);
		$scope.newPatch = {};
	}

	$scope.deletePatch = function(id){
		SynthFactory.deletePatch(id, getPatch);
	}
}])
