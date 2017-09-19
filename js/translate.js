var translate = angular.module('translate', []);

translate.factory('translateService', function() {
    var currentLanguage = 'pl';
    var tables = {
        'en': {
            'Publikacje': 'Publications',
            'Wykaz wszystkich publikacji w BibTeX-u': 'List of all publications in BibTeX',
            'Dydaktyka': 'Teaching',
            'Ekspert przetwarzania języka naturalnego': 'Natural Language Processing Expert',
            'Adiunkt': 'Assistant Professor',
            'Uniwersytet im. Adama Mickiewicza w Poznaniu': 'Adam Mickiewicz University in Poznań',
            'Wydział Matematyki i Informatyki': 'Faculty of Mathematics and Computer Science',
            'Zakład Przetwarzania Języka Naturalnego': 'Department of Natural Language Processing',
            'Pracownia Systemów Informacyjnych': 'Information Systems Laboratoty',
            'Pokój': 'Room',
            'Dyżury': 'Office hours',
            'Poniedziałki': 'Mondays',
            'Wtorki': 'Tuesdays',
            'Środy': 'Wednesdays',
            'Czwartki': 'Thursdays',
            'Piątki': 'Fridays',
            'Adres poczty elektronicznej': 'E-mail address',
        },
        'pl': {
        },
    };
    return {
        setCurrentLanguage: function(newCurrentLanguage) {
            currentLanguage = newCurrentLanguage;
        },
        getCurrentLanguage: function() {
            return currentLanguage;
        },
        translate: function(label) {
            if (label in tables[currentLanguage]) {
                return tables[currentLanguage][label];
            }
            return label;
        }
    };
});

translate.filter('translate', ['translateService', function(translateService) {
    function filterFn(label) {
        return translateService.translate(label);
    };
    filterFn.$stateful = true;
    return filterFn;
}]);

