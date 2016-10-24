angular.module('myApp').controller('fantasyCtrl', function ($scope) {

    $scope.fantasyBooks = [
        { Item: ' Harry Potter',
            Price: 75.99,
            Author: 'J. k. Rowling ',
            images : [
                'https://d.gr-assets.com/books/1387141547l/2.jpg'
            ]},
        {
            Item: 'The Hobbit',
            Price: 56.95,
            Author: 'J.R.R. Tolkien' ,
            images:[
                'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1097157.jpg'
            ]},
        { Item: 'Percy Jackson',
            Price: 49.91,
            Author: 'Rick Riordan',
            images:[
                "https://upic.me/i/bi/percyjacksonandtheolympiansthelightningthiefposter.jpg"
            ]
        },
        { Item: 'The Chronicles of Narnia',
            Price: 37.56,
            Author: 'C. S. Lewis',
            images:[
                'http://2.bp.blogspot.com/-JcpeA7p8u5U/USKd6nfaNGI/AAAAAAAAi_k/uUyq013gUW4/s1600/chronicles_of_narnia.jpg'
            ]
        },
        { Item: 'The Lord of the Rings',
            Price: 49.99,
            Author: 'J.R.R. Tolkien',
            images:[
                'http://cdn.pcwallart.com/images/lord-of-the-rings-original-book-cover-wallpaper-4.jpg'
            ]
        }

    ];


    $scope.fantasyBooks1 = [
        { Item: ' Harry Potter',
            Price: 75.99,
            Author: 'J. k. Rowling ',
            images : [
                'https://d.gr-assets.com/books/1387141547l/2.jpg'
            ]},
        {
            Item: 'The Hobbit',
            Price: 56.95,
            Author: 'J.R.R. Tolkien' ,
            canPurchase : false,
            images:[
                'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1097157.jpg'
            ]},
        { Item: 'Percy Jackson',
            Price: 49.91,
            Author: 'Rick Riordan',
            images:[
                "https://upic.me/i/bi/percyjacksonandtheolympiansthelightningthiefposter.jpg"
            ]
        },
        { Item: 'The Chronicles of Narnia',
            Price: 37.56,
            Author: 'C. S. Lewis',
            images:[
                'http://2.bp.blogspot.com/-JcpeA7p8u5U/USKd6nfaNGI/AAAAAAAAi_k/uUyq013gUW4/s1600/chronicles_of_narnia.jpg'
            ]
        },
        { Item: 'The Lord of the Rings',
            Price: 49.99,
            Author: 'J.R.R. Tolkien',
            images:[
                'http://cdn.pcwallart.com/images/lord-of-the-rings-original-book-cover-wallpaper-4.jpg'
            ]
        }

    ];


});

