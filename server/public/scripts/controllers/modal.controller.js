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
      templateUrl: 'myModalContent.html',   // HTML in the modal.html template
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

    // log a timestamp when the modal is dismissed
    modalInstance.result.then(function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


});


// Controls one specific modal window
myApp.controller('ModalInstanceController', function ($uibModalInstance, title) {
  var vm = this;

  vm.title = title;

  vm.ok = function () {
    $uibModalInstance.close();
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
