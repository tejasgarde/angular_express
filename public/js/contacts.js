angular.module("contacts",[])
.config(function($routeProvider){
	$routeProvider
	.when('/contact/:index',{
		templateUrl: 'edit.html',
		controller: 'Edit'
	})
	.when('/add',{
		templateUrl: 'edit.html',
		controller: 'Add'
	})
	.when('/delete',{
		templateUrl: 'edit.html',
		controller: 'Delete'
	})
	.when('/',{
		templateUrl: 'list.html'
	});
})
.controller('Contacts',function($scope){
	$scope.contacts = [
	{name: "Tom",number: '123345'},
	{name: "Dan",number: '09870'},
	{name: "Jeffery",number: '0374903'}
	];
})
.controller('Add',function($scope , $routeParams){
	var index = $scope.contacts.push({
		name: "New Contact",
		number: ''
	});
	
	$scope.contact = $scope.contacts[length - 1];
	$scope.index = length - 1;
})
.controller('Delete',function($scope, $routeParams,$location){
	$scope.contacts.splice($routeParams.index , 1);
	$location.path('/').replace();

})
.controller('Edit',function($scope, $routeParams){
	$scope.contact = $scope.contacts[$routeParams.index];
	$scope.index = $routeParams.index;

});