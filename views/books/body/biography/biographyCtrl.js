angular.module('myApp').controller('biographyCtrl', function ($scope) {

    $scope.biographyBooks = [
        { Item: ' Wings of Fire',
            Price: 59.65,
            Author: 'A. P. J. Abdul Kalam ',
            images : [
                'https://upload.wikimedia.org/wikipedia/en/3/3a/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg'
            ]},
        {
            Item: 'The Theory of Everything',
            Price: 76.95,
            Author: 'Stephen Hawking' ,
            images:[
                'https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg'
            ]},
        { Item: 'The Story of My Experiments with Truth',
            Price: 549.10,
            Author: 'Mahatma Gandhi',
            images:[
                "http://ecx.images-amazon.com/images/I/51yzgCXDXjL._SL_300_.jpg"
            ]
        },
        { Item: 'Benjamin Franklin autobiographical writings',
            Price: 137.50,
            Author: 'Benjamin Franklin',
            images:[
                'http://pictures.abebooks.com/isbn/9781931541879-us-300.jpg'
            ]
        },
        { Item: 'Long Walk to Freedom',
            Price: 88.32,
            Author: 'Nelson Mandela',
            images:[
                'https://d39ttiideeq0ys.cloudfront.net/assets/images/book/large/9780/3160/9780316034784.jpg'
            ]
        }

    ];

});

