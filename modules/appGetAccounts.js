/**
 * Created by sailfish2 on 1/2/2016.
 */
var app2 = angular.module('appGetAccounts',['ui.grid.pagination']);

app2.controller('getAccountsCtrl', function ($scope,$http,$q,$log,$filter,_,$state){

    $scope.gridOptions={};
    $scope.gridOptions.columnDefs = [
        { name: 'accountname',displayName:'Account' },
        { name: 'address',displayName:'Address'},
        { name: 'phoneno',displayName:'Phone No.'},
        { name: 'Add Pancard Entity',
            enableFiltering:false,
            cellTemplate:'<div>' +
            '  <a href="#/i/CA/CnPE?an={{row.entity.accountname}}">Add Subsidary</a>' +
            '</div>' }
    ];
    $scope.gridOptions.enableFiltering = true;
    $scope.gridOptions.paginationPageSizes = [10, 20, 30];
    $scope.gridOptions.paginationPageSize= 10;


        $http.get('https://caprofessions.herokuapp.com/api/accounts').success(function(response){


        var arr = [];
        // var arr1=[];


        _.each(response,function(value,key){
            arr.push(_.pick(value,'accountname','address','phoneno'));
        });

        /* _.each(arr,function(value,key){
         arr1.push(_.extend(value,{cellTemplate:'<div>' + '<a href="http://stackoverflow.com">Click me</a>' + '</div>'}));
         });*/

        //$scope.jsondata = arr1;
        $scope.gridOptions.data = arr;

    });

    //$scope.myData = [
    //    {
    //        "firstName": "Cox",
    //        "lastName": "Carney",
    //        "company": "Enormo",
    //        "employed": true
    //    },
    //    {
    //        "firstName": "Lorraine",
    //        "lastName": "Wise",
    //        "company": "Comveyer",
    //        "employed": false
    //    },
    //    {
    //        "firstName": "Nancy",
    //        "lastName": "Waters",
    //        "company": "Fuelton",
    //        "employed": false
    //    }
    //];
});