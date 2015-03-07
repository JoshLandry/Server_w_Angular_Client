'use strict';

module.exports = function(app) {
	app.controller('goatsController', ['$scope', '$http', function($scope, $http) {
		$scope.goats = [];
		$scope.getAll = function() {
			$http({
				method: 'GET',
				url: '/api/v1/goats',
			})
			.success(function(data) {
				$scope.goats = data;
			})
			.error(function(data, status) {
				console.log(data);
			})
		};

		$scope.create = function(goat) {
			$http({
				method: 'POST',
				url: '/api/v1/goats',
				data: goat
			})
			.success(function(data) {
				$scope.goats.push(data);
			})
			.error(function(data) {
				console.log(data);
			})
		};

		$scope.save = function(goat) {
			$http({
				method: 'PUT',
				url: '/api/v1/goats/' + goat._id,
				data: goat
			})
			.success(function() {
				goat.editing = false;
			})
			.error(function(data) {
				console.log(data);
			})
		};

		$scope.remove = function(goat) {
			$http({
				method: 'DELETE',
				url: '/api/v1/goats/' + goat._id
			})
			.success(function() {
				$scope.goats.splice($scope.goats.indexOf(goat), 1);
				alert("THAT was the tastiest goat!");
			})
			.error(function(data) {
				console.log(data);
			});
		};

		$scope.editToggle = function(goat) {
			if (goat.editing) {
				goat.goatSays = goat.oldGoatSaying;
				goat.goatName = goat.oldGoatName;
				goat.editing = false;
			} else {
				goat.oldGoatSaying = goat.goatSays;
				goat.oldGoatName = goat.goatName;
				goat.editing = true;
			}
		};

	}]);
};