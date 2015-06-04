/**
 * Created by wpguo on 6/4/2015.
 */
cln_ctrl.controller('AuctionCtrl', function ($scope, $location) {
        $scope.login = function (username, pwd) {
            //TODO go server and validate username and pwd
            $location.url('/main');
        };
    });