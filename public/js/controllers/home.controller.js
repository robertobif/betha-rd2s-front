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
            $location.path("/quadras");
        }
        function usuariosPage() {
            $location.path("/usuarios");
        }
    }
})();