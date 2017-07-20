
/*!
 *                                                              jQuery Plugins
 */

/*FitText.js 1.2*/

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

$(".fittext").fitText(1, {
  minFontSize: '9px',
  maxFontSize: '25px'
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5IFBsdWdpbnNcclxuICovXHJcblxyXG4vKkZpdFRleHQuanMgMS4yKi9cclxuXHJcbnZhciBteUFwcCA9IGFuZ3VsYXIubW9kdWxlKCdBbWljb011bHRpcGFnZScsIFsnbmdSb3V0ZSddKTtcclxuXHJcblxyXG5teUFwcC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAkcm91dGVQcm92aWRlclxyXG5cclxuICAgIC53aGVuKCcvaG9tZScsIHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi4vaG9tZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdIb21lQ3RybCdcclxuICB9KVxyXG5cclxuXHJcbiAgLndoZW4oJy9hYm91dCcsIHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYWJvdXQuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnQWJvdXRDdHJsJ1xyXG4gIH0pXHJcblxyXG5cclxuICAud2hlbignL3NlcnZpY2VzJywge1xyXG4gICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlcy5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdzZXJ2aWNlc0N0cmwnXHJcbiAgfSlcclxuXHJcbiAgLndoZW4oJy9tZWRpYScsIHtcclxuICAgIHRlbXBsYXRlVXJsOiAnbWVkaWEuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnbWVkaWFDdHJsJ1xyXG4gIH0pXHJcbiAgLndoZW4oJy9uZXdzJywge1xyXG4gICAgdGVtcGxhdGVVcmw6ICduZXdzLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogJ25ld3NDdHJsJ1xyXG4gIH0pXHJcblxyXG4gIFxyXG4gIC53aGVuKCcvY29udGFjdCcsIHtcclxuICAgIHRlbXBsYXRlVXJsOiAnY29udGFjdC5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdDb250YWN0Q3RybCdcclxuICB9KVxyXG5cclxuICAub3RoZXJ3aXNlKHtcclxuICAgICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnSG9tZUN0cmwnXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKFwiLmZpdHRleHRcIikuZml0VGV4dCgxLCB7XHJcbiAgbWluRm9udFNpemU6ICc5cHgnLFxyXG4gIG1heEZvbnRTaXplOiAnMjVweCdcclxufSk7Il0sImZpbGUiOiJjdXN0b20uanMifQ==
