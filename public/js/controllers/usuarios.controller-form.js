(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("UsuarioFormController", UsuarioFormController);

    UsuarioFormController.$inject = [
        "UsuarioService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function UsuarioFormController(
        UsuarioService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.usuario = {};
        vm.titulo = "Nova Usuario";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                UsuarioService.findById($routeParams.id).success(function (data) {
                    vm.usuario = data;
                    vm.titulo = "Editando Usuario";
                });
            }
        }

        function salvar() {
            UsuarioService.save(vm.usuario).success(function () {
                $location.path("/usuario");
                alert("Usuario cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();