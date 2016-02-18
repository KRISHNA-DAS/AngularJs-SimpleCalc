var app = angular.module('app', []);
app.controller('ctrl', ['$scope', function ($scope) {
    $scope.nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];
    $scope.expression = "";
    $scope.opEnable = false;
    $scope.pointEnable = true;
    $scope.minusEnable = true;
    var pointadded = false;
    var numadded = false;
    $scope.numClick = function (n) {
        $scope.expression += n;
        $scope.opEnable = true;
        $scope.minusEnable = true;
        pointadded = false;
        numadded = true;
    };
    $scope.fnClick = function (n) {
        if (pointadded == true) {
            $scope.expression += '0';
        }
        if ($scope.expression != "") {
            $scope.expression += n;
            $scope.opEnable = false;
            $scope.pointEnable = true;
            $scope.minusEnable = false;
            numadded = false;
        } else {
            if (n == '-') {
                $scope.expression += n;
                $scope.minusEnable = false;
            }
        }
    };
    $scope.pntClick = function () {
        if (numadded == false) {
            $scope.expression += 0;
        }
        $scope.expression += '.';
        $scope.pointEnable = false;
        pointadded = true;
    };
    $scope.ansClick = function () {
        var ans = eval($scope.expression);
        $scope.expression = "" + ans;
    }
    $scope.clrClick=function() {
        $scope.expression = "";
        $scope.opEnable = false;
        $scope.pointEnable = true;
        $scope.minusEnable = true;
        pointadded = false;
        numadded = false;
    }
}])