/**
 * Created by AllSa002 on 2/20/2015.
 */

var myApp = angular.module('myApp',['checklist-model']);

myApp.controller('MyController',function($scope){

    $scope.user={
    };

    $scope.legends = [{
        name: 'Types',
        values: [{
            id: 'cupId',
            name: 'Cup',
            price: 0.75
        }, {
            id: 'coneId',
            name: 'Wafer Cone',
            price: 0.90
        }]
    }, {
        name: 'Sundaes',
        values: [{
            id: 'oneScoopId',
            name: 'One Scoop',
            price: 2.45
        }, {
            id: 'twoScoopId',
            name: 'Two scoops',
            price: 3.90
        }, {
            id: 'threeScoopId',
            name: 'Three scoops',
            price: 4.80
        }]
    }, {
        name: 'Flavor List',
        values: [{
            id: 'berryId',
            name: 'Strawberry',
            price: 2.75
        }, {
            id: 'chocId',
            name: 'Chocolate',
            price: 4.90
        }, {
            id: 'vanillaId',
            name: 'Vanilla',
            price: 3.80
        }]
    }];

});
