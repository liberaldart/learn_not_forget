"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'This Application' },
            { id: 2, name: 'GMAT' },
            { id: 3, name: 'Interview Preparation' },
            { id: 4, name: 'Communication' },
            { id: 5, name: 'Book' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map