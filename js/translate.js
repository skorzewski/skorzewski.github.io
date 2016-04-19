var translate = angular.module('translate', []);

translate.factory('translateService', function() {
    var currentLanguage = 'pl';
    var tables = {
        'en': {
            'Publikacje': 'Publications',
            'Dydaktyka': 'Teaching',
            'Ekspert przetwarzania języka naturalnego': 'Natural Language Processing Expert',
            'Uniwersytet im. Adama Mickiewicza w Poznaniu': 'Adam Mickiewicz University in Poznań',
            'Wydział Matematyki i Informatyki': 'Faculty of Mathematics and Computer Science',
            'Pracownia Systemów Informacyjnych': 'Information Systems Laboratoty',
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

