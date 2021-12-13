(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("HorarioFormController", HorarioFormController);

    HorarioFormController.$inject = [
        "HorarioService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function HorarioFormController(
        HorarioService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.horario = {};
        vm.titulo = "Novo Horario";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                HorarioService.findById($routeParams.id).success(function (data) {
                    vm.horario = data;
                    vm.titulo = "Editando Horario";
                });
            }
        }

        function salvar() {
            HorarioService.save(vm.horario).success(function () {
                $location.path("/horario");
                alert("Horario cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();