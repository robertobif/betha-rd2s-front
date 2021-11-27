(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("JogadorFormController", JogadorFormController);

    JogadorFormController.$inject = [
        "JogadorService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function JogadorFormController(
        JogadorService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.jogador = {};
        vm.titulo = "Novo Jogador";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                JogadorService.findById($routeParams.id).success(function (data) {
                    vm.jogador = data;
                    vm.titulo = "Editando Jogador";
                });
            }
        }

        function salvar() {
            JogadorService.save(vm.jogador).success(function () {
                $location.path("/jogador");
                alert("Jogador cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();