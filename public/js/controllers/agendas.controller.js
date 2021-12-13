(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("AgendaListController", AgendaListController);

        AgendaListController.$inject = ["AgendaService"];

    function AgendaListController(AgendaService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            AgendaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            AgendaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();