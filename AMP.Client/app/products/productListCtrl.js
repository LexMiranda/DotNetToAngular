(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["$scope","productResource",
                    ProductListCtrl]); 

    function ProductListCtrl($scope,productResourse) {
        var vm = this;
        var nome = "";
        var dados = {};
        console.log("Chamou ProductListCtrl");
        console.log(productResourse);
        
        console.log(vm.filtronome);
        console.log("chamando");
        productResourse.query(function (data) {
            vm.products = data;
        });
        $scope.filtrar = function () {
            vm.filtronome = vm.nome;
            
            console.log("Chamou filtro " + vm.filtronome);
            if (vm.filtronome.length>0) {
                productResourse.query({ $filter: "substringof('" + vm.filtronome + "',ProductName)", $orderby: "Price asc" }, function (data) {
                    vm.products = data;
                });
            } else {
                productResourse.query(function (data) {
                    vm.products = data;
                });
                        
            }
            
        }
        
        
        

    }
}());
