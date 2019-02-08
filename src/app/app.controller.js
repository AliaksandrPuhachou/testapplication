angular
    .module('app')
    .controller('AppController', AppController);

function AppController(tableService) {
    const vm = this;
    vm.symbolName = '';
    vm.addSymbol = addSymbol;

    function addSymbol() {
        tableService.addRow(vm.symbolName);
        vm.symbolName = '';
    }
}

AppController.$inject = ['tableService'];
