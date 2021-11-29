(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("EquipeListController", EquipeListController);

        EquipeListController.$inject = ["EquipeService"];

    function EquipeListController(EquipeService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            EquipeService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            EquipeService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();