(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("JogadorListController", JogadorListController);

        JogadorListController.$inject = ["JogadorService"];

    function JogadorListController(JogadorService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            JogadorService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            JogadorService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();