angular
    .module('app')
    .component('table', TableComponent());

function TableComponent() {
    return {
        templateUrl: 'src/app/table/table.html',
        controller: 'TableController',
        controllerAs: 'vm'
    }
}