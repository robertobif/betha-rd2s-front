angular
    .module("MyApp", ["ngRoute", "satellizer"])
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "partials/home.html",
            })
            .when("/home", {
                templateUrl: "partials/home.html",
            })
            .when("/cidade", {
                templateUrl: "partials/cidade.html",
            })
            .when("/cidade/:id", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/cidade/new", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/estado", {
                templateUrl: "partials/estado.html",
            })
            .when("/estado/:id", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/estado/new", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/pais", {
                templateUrl: "partials/pais.html",
            })
            .when("/pais/:id", {
                templateUrl: "partials/pais-form.html",
            })
            .when("/pais/new", {
                templateUrl: "partials/pais-form.html",
            })            
            .when("/posicoes", {
                templateUrl: "partials/posicoes.html",
            })
            .when("/posicoes/:id", {
                templateUrl: "partials/posicoes-form.html",
            })
            .when("/posicoes/new", {
                templateUrl: "partials/posicoes-form.html",
            })
                        
            .when("/quadras", {
                templateUrl: "partials/quadras.html",
            })
            .when("/quadras/:id", {
                templateUrl: "partials/quadras-form.html",
            })
            .when("/quadras/new", {
                templateUrl: "partials/quadras-form.html",
            })
            .when("/usuario", {
                templateUrl: "partials/usuario.html",
            })
            .when("/usuario/:id", {
                templateUrl: "partials/usuario-form.html",
            })
            .when("/usuario/new", {
                templateUrl: "partials/usuario-form.html",
            })
            .otherwise({
                templateUrl: "partials/404.html",
            });
    })
    .run(function($rootScope, $window) {
        
    })
    .directive("ngConfirmClick", [
        function() {
            return {
                link: function(scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind("click", function(event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction);
                        }
                    });
                },
            };
        },
    ]);