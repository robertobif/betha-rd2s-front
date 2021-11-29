(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("EquipeFormController", EquipeFormController);

    EquipeFormController.$inject = [
        "EquipeService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function EquipeFormController(
        EquipeService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.equipe = {};
        vm.titulo = "Nova Equipe";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                EquipeService.findById($routeParams.id).success(function (data) {
                    vm.equipe = data;
                    vm.titulo = "Editando Equipe";
                });
            }
        }

        function salvar() {
            EquipeService.save(vm.equipe).success(function () {
                $location.path("/equipe");
                alert("Equipe cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();