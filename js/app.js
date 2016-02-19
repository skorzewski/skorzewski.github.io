var app = angular.module('SkorzewskiWebsite', ['ngRoute']);

app.controller('navbarCtrl', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
})

app.controller('publicationsCtrl', function($scope, $http) {
    $scope.publications = [
        {
            title: 'Probabilistic Tree-generating Binary Grammars',
            author: 'Paweł Skórzewski, Krzysztof Jassem',
            journal: 'Poznań Studies in Contemporary Linguistics',
            year: '2014',
            volume: '50',
            address: 'Poznań'
        },
        {
            title: 'Gobio and PSI-Toolkit: Adapting a deep parser to an NLP toolkit',
            author: 'Paweł Skórzewski',
            booktitle: 'Proceedings of the 6th Language and Technology Conference',
            year: '2013',
            editor: 'Zygmunt Vetulani and Hans Uszkoreit',
            pages: '523-526',
            address: 'Poznań',
            publisher: 'Fundacja UAM',
        }
    ]
});
