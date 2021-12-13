(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("HorarioListController", HorarioListController);

        HorarioListController.$inject = ["HorarioService"];

    function HorarioListController(HorarioService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            HorarioService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            HorarioService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();