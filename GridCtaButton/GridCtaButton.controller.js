
(function () {
    "use strict";

    function Controller($scope) {

        $scope.openOverlay = openOverlay;

        if (!$scope.control.value || $scope.control.value == "") {
            $scope.control.value = $scope.control.editor.config.btnDefaults;
        }

        function openOverlay() {

            $scope.overlay = {
                title: "Edit CTA Button",
                view: "/App_Plugins/GridCtaButton/GridCtaButtonOverlay.html",
                editModel: $scope.control.value,
                btnColor: $scope.control.editor.config.btnColor,
                show: true,
                submit: function (model) {
                    $scope.overlay.show = false;
                    $scope.overlay = null;
                },
                close: function (oldModel) {
                    $scope.overlay.show = false;
                    $scope.overlay = null;
                }
            }
        }
    }

    angular.module("umbraco").controller("rhs.gridctabuttoncontroller", Controller);
})();