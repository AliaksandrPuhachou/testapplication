angular
    .module('app')
    .controller('TableController', TableController);

function TableController(tableService) {
    const vm = this;
    vm.$onInit = $onInit;
    vm.gridOptions = tableService.gridOptions;

    function $onInit() {
        tableService.init();
    }
}

TableController.$inject = ['tableService'];