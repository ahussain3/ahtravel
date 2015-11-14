	var myApp = angular.module('myApp', []);
	
	myApp.controller('WhereNowController', ["$scope", "$http", function ($scope, $http){
			$http.get("http://46.101.40.44:3000/api/where_now").success(function(data) {
				$scope.where_now = data;
				$scope.where_now.since = moment(data.last_updated).fromNow();
				console.log(data);
			});
	}]);

	myApp.controller('WhereNextController', ["$scope", "$http", function ($scope, $http){
			$http.get("http://46.101.40.44:3000/api/where_next").success(function(data) {
				$scope.where_next = data;
				$scope.where_next.leave_message = moment(data.leave_date).format("MMM Do 'YY");
				console.log(data);
			});
	}]);


	myApp.controller('JournalEntryController', ["$scope", "$http", function ($scope, $http){
			$http.get("http://46.101.40.44:3000/api/journal_entry").success(function(data) {
				$scope.journal_entry = data;
				$scope.journal_entry.posted = moment(data.last_updated).fromNow();
				console.log(data);
			});
	}]);

	myApp.controller('SomethingBigController', ["$scope", "$http", function ($scope, $http){
			$http.get("http://46.101.40.44:3000/api/something_big").success(function(data) {
				$scope.s_big = data;
				$scope.s_big.updated = moment(data.last_updated).fromNow();
				console.log(data);
			});
	}]);

	myApp.controller('SomethingSmallController', ["$scope", "$http", function ($scope, $http){
			$http.get("http://46.101.40.44:3000/api/something_small").success(function(data) {
				$scope.s_small = data;
				$scope.s_small.updated = moment(data.last_updated).fromNow();
				console.log(data);
			});
	}]);

	myApp.controller('leaveMessageController', ["$scope", "$http", function ($scope, $http){
			$scope.formSubmitted = false;

			$scope.processForm = function () {
				console.log("Form submit recieved!");
				$scope.formSubmitted = true;
			}
	}]);

	myApp.controller('MetRecentController', ["$scope", "$http", function ($scope, $http){
			$http.get("http://46.101.40.44:3000/api/met_recent").success(function(data) {
				$scope.met_rec = data;
				$scope.met_rec.updated = moment(data.last_updated).fromNow();
				console.log(data);
			});
	}]);

	myApp.controller('BlogPostController', ["$scope", "$http", function ($scope, $http){
			$http.get("http://46.101.40.44:3000/api/blog_post").success(function(data) {
				$scope.blog_post = data;
				$scope.blog_post.updated = moment(data.last_updated).fromNow();
				console.log(data);
			});
	}]);

	myApp.controller('ReadNowController', ["$scope", "$http", function ($scope, $http){
			$http.get("http://46.101.40.44:3000/api/reading_now").success(function(data) {
				$scope.reading_now = data;
				console.log(data);
			});
	}]);
