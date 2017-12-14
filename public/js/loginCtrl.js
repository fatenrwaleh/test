
loginApp.controller('loginCtrl',function($scope,$http) {

    $scope.login= function()
    {
        debugger;
        $http.post('/api/login', {email:$scope.email , password:$scope.password}).then(function(r) {
            $scope.user = r.data;
        },

            function errorMessage(e) {
            $scope.errorMessage = e.data.message;
        });
    }


    $scope.changPassword= function(newPassword) {
        debugger;

        $http.put('/api/login', { password:$scope.newPassword}).then(function(user) {
            $scope.user = user.data;
        });
    }

});
