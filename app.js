var app = angular.module('app', []);
app.controller('ctrl', ['$scope', function ($scope) {
            $scope.view = "0";
            $scope.nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];
    
            $scope.btnClick = function (n) {
                if (n == '0') {
                    if ($scope.view != '0') {
                        $scope.view += n;
                    }
                }
                else if(n=='c'){
                    $scope.view="0";
                }
                else if(n=='.'){
                    if($scope.view.indexOf(".")==-1){
                        $scope.view += n;
                    }
                }
                else {
                    if ($scope.view != '0') {
                        $scope.view += n;
                    }
                    else{
                        $scope.view=""+n;
                    }
                }
                };


            }])