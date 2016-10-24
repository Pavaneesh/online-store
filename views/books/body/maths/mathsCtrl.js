angular.module('myApp').controller('mathsCtrl', function ($scope) {

    $scope.maths = [
        {
            Item: 'The Man Who Knew Infinity',
            Price: 99.99,
            Author: 'Robert Kanigel',
            images: [
                'http://d152j5tfobgaot.cloudfront.net/wp-content/uploads/2016/04/man-who-knew-infinity-656x1024.jpg'
            ]
        },
        {
            Item: ' Euclid Elements',
            Price: 5.99,
            Author: 'Euclid',
            images: [
                'http://image.slidesharecdn.com/euclid-140901092411-phpapp01/95/euclid-14-638.jpg'
            ]
        },
        {
            Item: 'How Not to Be Wrong: The Power of Mathematical Thinking',
            Price: 4.50,
            Author: 'Jordan Ellenberg',
            images: [
                "http://www.hownottobewrong.com/HowNotToBeWrong.jpg"
            ]
        },
        {
            Item: 'The Grapes of Math',
            Price: 3.75,
            Author: 'Greg Tang',
            images: [
                'http://ecx.images-amazon.com/images/I/51h5HefNb-L.jpg'
            ]
        },
        {
            Item: 'Real and Complex Analysis',
            Price: 9.99,
            Author: 'Walter Rudin',
            images: [
                'https://images-na.ssl-images-amazon.com/images/I/4190ZyrylxL._SY344_BO1,204,203,200_.jpg'
            ]
        },
        {
            Item: 'Calculus Made Easy',
            Price: 0.99,
            Author: 'Silvanus P. Thompson',
            images: [
                'http://d.gr-assets.com/books/1312067998l/818063.jpg'
            ]
        }

    ];


});

