angular.module('simpleapp').controller('ItemDetailsCtrl', ['$scope', '$stateParams', '$meteor',
    function ($scope, $stateParams, $meteor) {
        $scope.item = $meteor.object(Items, $stateParams.itemCode).subscribe('items');
        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.save = function () {
            $scope.item.save().then(function (numberOfDocs) {
                console.log('save success doc affected ', numberOfDocs);
            }, function (error) {
                console.log('save error', error);
            });
        };

        $scope.reset = function () {
            $scope.item.reset();
        };
    }
]);
