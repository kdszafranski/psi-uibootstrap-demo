myApp.controller('ModalController', function($uibModal, $log) {
  console.log('modal controller running');

  var vm = this;

  vm.animationsEnabled = true;

  vm.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: vm.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      // templateUrl: '/public/views/templates/modal.template.html',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceController',
      controllerAs: 'mic',
      size: size,
      appendTo: parentElem,
      resolve: {
        title: function () {
          return 'Psi Modals!';
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      vm.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


});


myApp.controller('ModalInstanceController', function ($uibModalInstance, title) {
  var vm = this;

  vm.title = title;

  vm.ok = function () {
    console.log('ok click');
    $uibModalInstance.close();
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
