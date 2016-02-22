var app = angular.module('SkorzewskiWebsite', ['ngRoute']);

app.controller('navbarCtrl', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
})

app.controller('publicationsCtrl', function($scope, $sce) {
    var Publication = function(data) {
        this.data = data;
        this.bibtex = function() {
            if (this.data.type && this.data.id) {
                var result = '@' + this.data.type + '{' + this.data.id + ',\n';
                fields = ['author', 'title'];
                for (var i = 0; i < fields.length; i++) {
                    result += fields[i] + '\n';
                    if (this.data[fields[i]]) {
                        result += '    ' + fields[i] + '={' + this.data[fields[i]] + '},\n';
                    }
                }
                result += '}\n';
                return result;
            } else {
                return null;
            }
        };
        this.html = function() {
            var result = '';
            if (this.data.author) {
                result += this.data.author;
            }
            if (result != '') {
                result += ', ';
            }
            if (this.data.title) {
                result += '<em>' + this.data.title + '</em>';
            }
            if (this.data.www) {
                result += ' <a title="WWW" href="' + this.data.www + '"><span class="glyphicon glyphicon-globe" aria-hidden="true"></span></a>';
            }
            if (this.data.pdf) {
                result += ' <a title="PDF" href="' + this.data.pdf + '"><span class="glyphicon glyphicon-file" aria-hidden="true"></span></a>';
            }
            var bibtex = this.bibtex();
            if (bibtex) {
                result += ' <a title="' + bibtex + '"><span class="glyphicon glyphicon-book" aria-hidden="true"></span></a>';
            }
            return $sce.trustAsHtml(result);
        };
    };

    $scope.publications = [
        new Publication({
            type: 'article',
            id: 'skorzewski14',
            title: 'Probabilistic Tree-generating Binary Grammars',
            author: 'Paweł Skórzewski, Krzysztof Jassem',
            journal: 'Poznań Studies in Contemporary Linguistics',
            year: '2014',
            volume: '50',
            address: 'Poznań',
        }),
        new Publication({
            title: 'Gobio and PSI-Toolkit: Adapting a deep parser to an NLP toolkit',
            author: 'Paweł Skórzewski',
            booktitle: 'Proceedings of the 6th Language and Technology Conference',
            year: '2013',
            editor: 'Zygmunt Vetulani and Hans Uszkoreit',
            pages: '523-526',
            address: 'Poznań',
            publisher: 'Fundacja UAM',
        }),
        new Publication({
            type: 'article',
            id: 'skorzewski10b',
            title: 'An Application of Probabilistic Grammars to Efficient Machine Translation',
            author: 'Paweł Skórzewski',
            journal: 'Investigationes Linguisticae',
            year: '2010',
            volume: '21',
            pages: '90-98',
            www: 'http://inveling.amu.edu.pl/index.php?direct=226',
            pdf: 'http://inveling.amu.edu.pl/pdf/skorzewski_inve21.pdf',
        }),
    ];
});
