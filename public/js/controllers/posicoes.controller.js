(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("PosicoesListController", PosicoesListController);

        PosicoesListController.$inject = ["PosicoesListController"];

    function PosicoesListController(PosicoesService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            PosicoesService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            PosicoesService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();