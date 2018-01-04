var app = angular.module('SkorzewskiWebsite', ['translate', 'ngRoute']);

app.controller('navbarCtrl', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

app.controller('languageCtrl', ['$scope', 'translateService', function($scope, translateService) {
    $scope.setCurrentLanguage = function(language) {
        translateService.setCurrentLanguage(language);
    };
    $scope.isCurrentLanguage = function(language) {
        return language === translateService.getCurrentLanguage();
    };
}]);

app.controller('publicationsCtrl', function($scope, $sce) {
    var Publication = function(data) {
        this.data = data;
        this.bibtex = function() {
            if (this.data.type && this.data.id) {
                var result = '@' + this.data.type + '{' + this.data.id + ',\n';
                fields = [
                    'author',
                    'title',
                    'booktitle',
                    'journal',
                    'school',
                    'year',
                    'editor',
                    'volume',
                    'number',
                    'series',
                    'chapter',
                    'pages',
                    'address',
                    'edition',
                    'howpublished',
                    'month',
                    'organization',
                    'institution',
                    'publisher',
                    'note',
                    'key',
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
            var result = '<span class="bibtexable">';
            if (this.data.author) {
                result += this.data.author.split(' and ').join(', ');
            }
            if (result != '') {
                result += ', ';
            }
            if (this.data.title) {
                result += '<em>' + this.data.title + '</em>';
            }
            if (this.data.booktitle) {
                result += ', ' + this.data.booktitle;
            }
            if (this.data.editor) {
                result += ' (ed. ' + this.data.editor + ')';
            }
            if (this.data.journal) {
                result += ', ' + this.data.journal;
            }
            if (this.data.volume) {
                result += ', vol. ' + this.data.volume;
            }
            if (this.data.pages) {
                result += ', pp. ' + this.data.pages;
            }
            if (this.data.type == 'phdthesis') {
                result += ', praca doktorska';
            }
            if (this.data.type == 'masterthesis') {
                result += ', praca magisterska';
            }
            if (this.data.school) {
                result += ', ' + this.data.school;
            }
            if (this.data.edition) {
                result += ', ed. ' + this.data.edition;
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
            if (this.data.note) {
                result += ', ' + this.data.note;
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
            result += "</span>"
            return $sce.trustAsHtml(result);
        };
    };

    $scope.publications = [
        new Publication({
            type: 'article',
            id: 'jassem17',
            title: 'Processing historical texts with contemporary NLP tools',
            author: 'Krzysztof Jassem and Paweł Skórzewski',
            journal: 'Proceedings of the 8th Language and Technology Conference',
            pages: '152-157',
            year: '2017',
            publisher: 'Fundacja UAM',
        }),
        new Publication({
            type: 'inproceedings',
            id: 'kubis17',
            title: 'EUDAMU at SemEval-2017 Task 11: Action ranking and type matching for end-user development',
            author: 'Marek Kubis and Paweł Skórzewski and Tomasz Ziętkiewicz',
            booktitle: 'Proceedings of the 11th International Workshop on Semantic Evaluation (SemEval-2017)',
            year: '2017',
            month: 'August',
            pages: '1000-1004',
            address: 'Vancouver',
            publisher: 'Association for Computational Linguistics',
            url: 'http://www.aclweb.org/anthology/S17-2175',
            pdf: 'http://www.aclweb.org/anthology/S17-2175',
            www: 'http://nlp.arizona.edu/SemEval-2017',
        }),
        new Publication({
            type: 'article',
            id: 'jassem15',
            title: 'PSI-Toolkit - an extensible and tightly integrated set of NLP tools',
            author: 'Krzysztof Jassem and Filip Graliński and Marcin Junczys-Dowmunt and Paweł Skórzewski and Roman Grundkiewicz and Marcin Walas and Rafał Jaworski and Tomasz Dwojak',
            journal: 'Human Language Technologies as a Challenge for Computer Science and Linguistics',
            pages: '280-282',
            year: '2015',
            publisher: 'Fundacja UAM',
        }),
        new Publication({
            type: 'phdthesis',
            id: 'skorzewski14i',
            author: 'Paweł Skórzewski',
            title: 'Wydajne algorytmy parsowania dla języków o szyku swobodnym',
            school: 'Wydział Matematyki i Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu',
            year: '2014',
            address: 'Poznań',
            note: 'promotor: Krzysztof Jassem',
        }),
        new Publication({
            type: 'article',
            id: 'skorzewski14',
            title: 'Probabilistic Tree-generating Binary Grammars',
            author: 'Paweł Skórzewski and Krzysztof Jassem',
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
            editor: 'Zygmunt Vetulani and Hans Uszkoreit',
            pages: '523-526',
            address: 'Poznań',
            publisher: 'Fundacja UAM',
            pdf: 'resources/publications/skorzewski13.pdf',
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
            editor: 'Maria Ganzha and Marcin Paprzycki',
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
            note: 'promotor: Wojciech Buszkowski',
            pdf: 'resources/publications/skorzewski_mgrm.pdf',
        }),
        new Publication({
            type: 'masterthesis',
            id: 'skorzewski10i',
            author: 'Paweł Skórzewski',
            title: 'Efektywny parsing języka naturalnego przy użyciu gramatyk probabilistycznych',
            school: 'Wydział Matematyki i Informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu',
            year: '2010',
            address: 'Poznań',
            note: 'promotor: Krzysztof Jassem',
            pdf: 'resources/publications/skorzewski_mgri.pdf',
        }),
    ];

    all_bibliography = ""
    for (var i = 0; i < $scope.publications.length; i++) {
        all_bibliography += $scope.publications[i].bibtex()
    }
    $scope.publications_bibtex = $sce.trustAsHtml(all_bibliography);
});

$(document).ready(function() {
    $(document).on('click', '.bibtex-button', function(event) {
        event.stopPropagation();
        $(this).closest('.bibtexable').find('.bibtex-content').fadeToggle();
    });
});
