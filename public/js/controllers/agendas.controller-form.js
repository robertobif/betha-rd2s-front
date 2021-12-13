(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("AgendaFormController", AgendaFormController);

    AgendaFormController.$inject = [
        "AgendaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function AgendaFormController(
        AgendaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.agenda = {};
        vm.titulo = "Nova Agenda";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                AgendaService.findById($routeParams.id).success(function (data) {
                    vm.agenda = data;
                    vm.titulo = "Editando Agenda";
                });
            }
        }

        function salvar() {
            AgendaService.save(vm.agenda).success(function () {
                $location.path("/agenda");
                alert("Agenda cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();