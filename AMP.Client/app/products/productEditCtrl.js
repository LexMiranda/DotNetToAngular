(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductEditCtrl",
                     ProductEditCtrl);

    function ProductEditCtrl(productResource) {
        var vm = this;
        vm.product = {};
        vm.message = '';

        productResource.get({ id: 2},
            function (data) {
                vm.product = data;
                vm.originalProduct = angular.copy(data);
            }
        );

        if (vm.product && vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        }
        else {
            vm.title = "New Product";
        }

        vm.submit = function () {
            vm.message = '';

            if (vm.product.productId) {

                vm.product.$update({ id: vm.product.productId },
                    function(data) {
                        vm.message = "Save complete...";
                    }
                );
            }
            else {  
                vm.product.$save(function(data) {
                    vm.originalProduct = angular.copy(data)
                    vm.message = "Save complete...";
                });
            }

        };

        vm.cancel = function (editForm) {
            editForm.$setPristine();
            vm.product = angular.copy(vm.originalProduct);
            vm.message = "";
        };

    }
}());
