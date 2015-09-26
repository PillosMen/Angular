(function() {
    'use strict';
    var app = angular.module('app', []);

    app.controller('SchoolCtrl', function($scope) {
        this.students = students
    });

    var students = [{
        name: "Daniel",
        age: 21,
        email: "dan@hectic.io",
        status: true
    },{
        name: "Alice",
        age: 22,
        email: "alice@gmail.com",
        status: true
    },{
        name: "Duck",
        age: 33,
        email: "duck@gmail.com",
        status: true
    },{
        name: "Pillos",
        age: 22,
        email: "pepepollo@gmail.com",
        status: false
    },];

}());
