angular.module('simpleapp').controller('ItemListCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {

        $scope.page = 1;
        $scope.perPage =3;
        $scope.sort={code:1};

        $scope.items = $meteor.collection(function(){
            return Items.find({},{
                sort : $scope.sort
            });
        });
        $meteor.subscribe('items',{
            limit:parseInt($scope.perPage),
            skip: parseInt(($scope.page -1) *$scope.perPage),
            sort: $scope.sort
        }).then(function(){
            $scope.itemsCount = $meteor.object(Counts, 'numberOfItems',false);
        });

        $scope.remove = function (item) {
            $scope.items.remove(item);
        }
        $scope.removeAll = function () {
            $scope.items.remove();
        };
        $scope.pageChanged = function(newPage){
            $scope.page=newPage;
        };
    }]);

