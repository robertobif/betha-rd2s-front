(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.cidadesPage = cidadesPage;
        vm.estadosPage = estadosPage;
        vm.paisesPage = paisesPage;
        vm.posicoesPage = posicoesPage;
        vm.quadrasPage = quadrasPage;
        vm.usuariosPage = usuariosPage;
        vm.jogadoresPage = jogadoresPage;
        vm.equipesPage = equipesPage;


        activate();

        function activate() {
        }

        function cidadesPage() {
            $location.path("/cidade");
        }
        function estadosPage() {
            $location.path("/estado");
        }
        function paisesPage() {
            $location.path("/pais");
        }
        function posicoesPage() {
            $location.path("/posicoes");
        }
        function quadrasPage() {
            $location.path("/quadra");
        }
        function usuariosPage() {
            $location.path("/usuario");
        }
        function jogadoresPage() {
            $location.path("/jogador");
        }
        function equipesPage() {
            $location.path("/equipe");
        }
    }
})();