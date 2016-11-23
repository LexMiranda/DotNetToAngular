(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",
                    ProductListCtrl]); 

    function ProductListCtrl(productResourse) {
        var vm = this;
        var dados = {};
        console.log("Chamou ProductListCtrl");
        console.log(productResourse);
        productResourse.query({ $filter: "startswith(ProductName,'Lex')", $orderby: "Price asc" }, function (data) {
            vm.products = data;
        });
        console.log(vm.products);
        

    }
}());
