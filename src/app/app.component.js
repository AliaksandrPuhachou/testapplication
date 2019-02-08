angular
    .module('app')
    .component('app', AppComponent());

function AppComponent() {
    return {
        templateUrl: 'src/app/app.html',
        controller: 'AppController',
        controllerAs: 'vm'
    }
}
