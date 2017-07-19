
/* For Angular*/
var myApp = angular.module('AmicoMultipage', ['ngRoute']);


myApp.config(function($routeProvider) {
  $routeProvider

    .when('/home', {
    templateUrl: '../home.html',
    controller: 'HomeCtrl'
  })


  .when('/about', {
    templateUrl: 'about.html',
    controller: 'AboutCtrl'
  })


  .when('/services', {
    templateUrl: 'services.html',
    controller: 'servicesCtrl'
  })

  .when('/media', {
    templateUrl: 'media.html',
    controller: 'mediaCtrl'
  })
  .when('/news', {
    templateUrl: 'news.html',
    controller: 'newsCtrl'
  })

  
  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'ContactCtrl'
  })

  .otherwise({
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    });
});

/*!
 *                                                              Customization scripts for main technologies
 */

$(".fittext").fitText(1, {
  minFontSize: '9px',
  maxFontSize: '25px'
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIEZvciBBbmd1bGFyKi9cclxudmFyIG15QXBwID0gYW5ndWxhci5tb2R1bGUoJ0FtaWNvTXVsdGlwYWdlJywgWyduZ1JvdXRlJ10pO1xyXG5cclxuXHJcbm15QXBwLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xyXG4gICRyb3V0ZVByb3ZpZGVyXHJcblxyXG4gICAgLndoZW4oJy9ob21lJywge1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9ob21lLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogJ0hvbWVDdHJsJ1xyXG4gIH0pXHJcblxyXG5cclxuICAud2hlbignL2Fib3V0Jywge1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhYm91dC5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdBYm91dEN0cmwnXHJcbiAgfSlcclxuXHJcblxyXG4gIC53aGVuKCcvc2VydmljZXMnLCB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NlcnZpY2VzLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogJ3NlcnZpY2VzQ3RybCdcclxuICB9KVxyXG5cclxuICAud2hlbignL21lZGlhJywge1xyXG4gICAgdGVtcGxhdGVVcmw6ICdtZWRpYS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdtZWRpYUN0cmwnXHJcbiAgfSlcclxuICAud2hlbignL25ld3MnLCB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ25ld3MuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnbmV3c0N0cmwnXHJcbiAgfSlcclxuXHJcbiAgXHJcbiAgLndoZW4oJy9jb250YWN0Jywge1xyXG4gICAgdGVtcGxhdGVVcmw6ICdjb250YWN0Lmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogJ0NvbnRhY3RDdHJsJ1xyXG4gIH0pXHJcblxyXG4gIC5vdGhlcndpc2Uoe1xyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ3RybCdcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8qIVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9taXphdGlvbiBzY3JpcHRzIGZvciBtYWluIHRlY2hub2xvZ2llc1xyXG4gKi9cclxuXHJcbiQoXCIuZml0dGV4dFwiKS5maXRUZXh0KDEsIHtcclxuICBtaW5Gb250U2l6ZTogJzlweCcsXHJcbiAgbWF4Rm9udFNpemU6ICcyNXB4J1xyXG59KTsiXSwiZmlsZSI6ImN1c3RvbS5qcyJ9
