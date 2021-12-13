(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ClienteFormController", ClienteFormController);

    ClienteFormController.$inject = [
        "ClienteService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ClienteFormController(
        ClienteService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cliente = {};
        vm.titulo = "Novo Cliente";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                ClienteService.findById($routeParams.id).success(function (data) {
                    vm.cliente = data;
                    vm.titulo = "Editando Cliente";
                });
            }
        }

        function salvar() {
            ClienteService.save(vm.cliente).success(function () {
                $location.path("/cliente");
                alert("Cliente cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();