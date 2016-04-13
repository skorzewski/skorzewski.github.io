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
                fields = [
                    'author',
                    'title',
                    'journal',
                    'year',
                    'volume',
                ];
                for (var i = 0; i < fields.length; i++) {
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
            if (this.data.address) {
                result += ', ' + this.data.address;
            }
            if (this.data.year) {
                if (!this.data.address) {
                    result += ',';
                }
                result += ' ' + this.data.year;
            }
            if (this.data.www) {
                result += ' <a title="WWW" href="' + this.data.www + '"><span class="glyphicon glyphicon-globe" aria-hidden="true"></span></a>';
            }
            if (this.data.pdf) {
                result += ' <a title="PDF" href="' + this.data.pdf + '"><span class="glyphicon glyphicon-file" aria-hidden="true"></span></a>';
            }
            var bibtex = this.bibtex();
            if (bibtex) {
                result += ' <a class="bibtex-button" title="BibTeX"><span class="glyphicon glyphicon-book" aria-hidden="true"></span></a>';
                result += ' <pre class="bibtex-content">' + bibtex + '</pre>';
            }
            return $sce.trustAsHtml(result);
        };
    };

    $scope.publications = [
        new Publication({
            type: 'phdthesis',
            id: 'skorzewski14i',
            author: 'Paweł Skórzewski',
            title: 'Wydajne algorytmy parsowania dla języków o szyku swobodnym',
            school: 'Wydział Matematyki i Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu',
            year: '2014',
            address: 'Poznań',
            note: 'Promotor: Krzysztof Jassem',
        }),
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
            type: 'inproceedings',
            id: 'skorzewski13',
            title: 'Gobio and PSI-Toolkit: Adapting a deep parser to an NLP toolkit',
            author: 'Paweł Skórzewski',
            booktitle: 'Proceedings of the 6th Language and Technology Conference',
            year: '2013',
            editor: 'Zygmunt Vetulani, Hans Uszkoreit',
            pages: '523-526',
            address: 'Poznań',
            publisher: 'Fundacja UAM',
            pdf: 'publications/skorzewski13.pdf',
        }),
        new Publication({
            type: 'inproceedings',
            id: 'skorzewski11',
            title: 'Obtaining PCFG probabilities based on the corpus',
            author: 'Paweł Skórzewski',
            booktitle: 'Proceedings of the 5th Language and Technology Conference',
            year: '2011',
            editor: 'Zygmunt Vetulani',
            pages: '411-414',
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
        new Publication({
            type: 'inproceedings',
            id: 'skorzewski10a',
            title: 'Effective natural language parsing with probabilistic grammars',
            author: 'Paweł Skórzewski',
            booktitle: 'Proceedings of the International Multiconference on Computer Science and Information Technology',
            year: '2010',
            editor: 'Maria Ganzha, Marcin Paprzycki',
            pages: '501-504',
            address: 'Wisła',
            publisher: 'Polskie Towarzystwo Informatyczne',
            www: 'http://fedcsis.org/2010/pg/395/305'
        }),
        new Publication({
            type: 'masterthesis',
            id: 'skorzewski10m',
            author: 'Paweł Skórzewski',
            title: 'Gramatyki i automaty probabilistyczne',
            school: 'Wydział Matematyki i Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu',
            year: '2010',
            address: 'Poznań',
            note: 'Promotor: Wojciech Buszkowski',
            pdf: 'publications/skorzewski_mgrm.pdf',
        }),
        new Publication({
            type: 'masterthesis',
            id: 'skorzewski10i',
            author: 'Paweł Skórzewski',
            title: 'Efektywny parsing języka naturalnego przy użyciu gramatyk probabilistycznych',
            school: 'Wydział Matematyki i Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu',
            year: '2010',
            address: 'Poznań',
            note: 'Promotor: Krzysztof Jassem',
            pdf: 'publications/skorzewski_mgri.pdf',
        }),
    ];
});

$(document).ready(function() {
    $(document).on('click', '.bibtex-button', function(event) {
        event.stopPropagation();
        $(this).closest('li').find('.bibtex-content').fadeToggle();
    });
});
