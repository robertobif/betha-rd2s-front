(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("PosicoesFormController", PosicoesFormController);

    PosicoesFormController.$inject = [
        "PosicoesService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function PosicoesFormController(
        PosicoesService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.posicoes = {};
        vm.titulo = "Nova Posição";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                PosicoesService.findById($routeParams.id).success(function (data) {
                    vm.posicoes = data;
                    vm.titulo = "Editando Posição";
                });
            }
        }

        function salvar() {
            PosicoesService.save(vm.posicoes).success(function () {
                $location.path("/posicoes");
                alert("Posição cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();