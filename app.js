angular.module('myApp', ["ui.router"]).config(function($stateProvider, $urlRouterProvider){

    $stateProvider

        .state('onlineStore', {
            url: "/onlineStore",
            views: {
                "viewA": {
                    templateUrl: "views/onlineStore/onlineStore.html",
                    controller: 'onlineStoreCtrl'
                }
            }
        })
        .state('books', {
            url: "/books",
            views: {
                "viewB": {
                    templateUrl: "views/books/books.html",
                    controller: 'booksCtrl'
                },
                "viewC": {
                    templateUrl: "views/books/body/fantasy/fantasy.html",
                    controller: 'fantasyCtrl'
                }
            }
        })
        .state('biography', {
            url: "/biography",
            views: {
                "viewB": {
                    templateUrl: "views/books/books.html",
                    controller: 'booksCtrl'
                },
                "viewC": {
                    templateUrl: "views/books/body/biography/biography.html",
                    controller: 'biographyCtrl'
                }
            }
        })
        .state('fantasy', {
            url: "/fantasy",
            views: {
                "viewB": {
                    templateUrl: "views/books/books.html",
                    controller: 'booksCtrl'
                },
                "viewC": {
                    templateUrl: "views/books/body/fantasy/fantasy.html",
                    controller: 'fantasyCtrl'
                }
            }
        })
        .state('maths', {
            url: "/maths",
            views: {
                "viewB": {
                    templateUrl: "views/books/books.html",
                    controller: 'booksCtrl'
                },
                "viewC": {
                    templateUrl: "views/books/body/maths/maths.html",
                    controller: 'mathsCtrl'
                }
            }
        })
        .state('games', {
            url: "/games",
            views: {
                "viewA": {
                    templateUrl: "views/games/games.html",
                    controller: 'gamesCtrl'
                }
            }
        })
        .state('electronics', {
            url: "/electronics",
            views: {
                "viewA": {
                    templateUrl: "views/electronics/electronics.html",
                    controller: 'electronicsCtrl'
                }
            }
        })
        .state('cart', {
            url: "/cart",
            views: {
                "viewA": {
                    templateUrl: "views/cart/cart.html",
                    controller: 'cartCtrl'
                }
            }
        })
        .state('signUp', {
            url: "/signUP",
            views: {
                "viewA": {
                    templateUrl: "views/signUp/signUp.html",
                    controller: 'signUpCtrl'
                }
            }
        })
        .state('login', {
            url: "/login",
            views: {
                "viewA": {
                    templateUrl: "views/login/login.html",
                    controller: 'loginCtrl'
                }
            }
        })



    $urlRouterProvider.otherwise("/onlineStore");

});