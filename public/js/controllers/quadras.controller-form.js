(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("QuadraFormController", QuadraFormController);

    QuadraFormController.$inject = [
        "QuadraService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function QuadraFormController(
        QuadraService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.quadra = {};
        vm.titulo = "Nova Quadra";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                QuadraService.findById($routeParams.id).success(function (data) {
                    vm.quadra = data;
                    vm.titulo = "Editando Quadra";
                });
            }
        }

        function salvar() {
            QuadraService.save(vm.quadra).success(function () {
                $location.path("/quadra");
                alert("Quadra cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();