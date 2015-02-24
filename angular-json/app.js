var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/movies', {
            templateUrl: 'movies.html',
            controller: 'moviesController'
        })
            .when('/indianzipcodes', {
                templateUrl: 'zipcodes.html',
                controller: 'zipcodeController'
            }).when('/weathertemperatures', {
                templateUrl: 'temps.html',
                controller: 'weatherController'
        }).otherwise('/movies')
        
    }
])


myApp.controller('weatherController', ['$scope', '$http', function($scope, $http){
        $scope.getweather=function(){
            var weatherreq={
                url: "https://george-vustrey-weather.p.mashape.com/api.php?location="+$scope.locationName,
                method: "GET",
                headers: {
                    "X-Mashape-Key":"QFb4rmTflnmshDo2krFAptScjWXHp1dc7IwjsnJZrZjJkGmxBO",
                    "Accept": "application/json"
                }
            };
            
            $http(weatherreq).success(function(data){
                $scope.weatherdata= data;
            }).error(function(error){
                $scope.errormsg = error;
            });
        }


}])


myApp.controller('zipcodeController', ['$scope', '$http',
        function($scope, $http) {
            $scope.getMethod = function() {
                var req = {
                    url: "https://sphirelabs-indian-pin-codes.p.mashape.com/pinlocation.php?location="+$scope.cityname,
                    method: "GET",
                    headers: {
                    "X-Mashape-Key":"QFb4rmTflnmshDo2krFAptScjWXHp1dc7IwjsnJZrZjJkGmxBO",
                    "Accept": "application/json"
                    }
                };
                
                $http(req).success(function(data) {
                    $scope.response = data;

                }).error(function(error) {
                    $scope.msg = "error" + error;
                });
            };

        }]);

    myApp.controller('moviesController', ['$scope',
        function($scope) {

            $scope.moviesjson = {
                "total": 2,
                "movies": [{
                    "id": "770672122",
                    "title": "Toy Story 3",
                    "year": 2010,
                    "mpaa_rating": "G",
                    "runtime": 103,
                    "critics_consensus": "Deftly blending comedy, adventure, and honest emotion, Toy Story 3 is a rare second sequel that really works.",
                    "release_dates": {
                        "theater": "2010-06-18",
                        "dvd": "2010-11-02"
                    },
                    "ratings": {
                        "critics_rating": "Certified Fresh",
                        "critics_score": 99,
                        "audience_rating": "Upright",
                        "audience_score": 91
                    },
                    "synopsis": "Pixar returns to their first success with Toy Story 3. The movie begins with Andy leaving for college and donating his beloved toys -- including Woody (Tom Hanks) and Buzz (Tim Allen) -- to a daycare. While the crew meets new friends, including Ken (Michael Keaton), they soon grow to hate their new surroundings and plan an escape. The film was directed by Lee Unkrich from a script co-authored by Little Miss Sunshine scribe Michael Arndt. ~ Perry Seibert, Rovi",
                    "posters": {
                        "thumbnail": "http://content6.flixster.com/movie/11/13/43/11134356_tmb.jpg",
                        "profile": "http://content6.flixster.com/movie/11/13/43/11134356_tmb.jpg",
                        "detailed": "http://content6.flixster.com/movie/11/13/43/11134356_tmb.jpg",
                        "original": "http://content6.flixster.com/movie/11/13/43/11134356_tmb.jpg"
                    },
                    "abridged_cast": [{
                        "name": "Tom Hanks",
                        "characters": ["Woody"]
                    }, {
                        "name": "Tim Allen",
                        "characters": ["Buzz Lightyear"]
                    }, {
                        "name": "Joan Cusack",
                        "characters": ["Jessie the Cowgirl"]
                    }, {
                        "name": "Don Rickles",
                        "characters": ["Mr. Potato Head"]
                    }, {
                        "name": "Wallace Shawn",
                        "characters": ["Rex"]
                    }],
                    "alternate_ids": {
                        "imdb": "0435761"
                    },
                    "links": {
                        "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122.json",
                        "alternate": "http://www.rottentomatoes.com/m/toy_story_3/",
                        "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/cast.json",
                        "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/clips.json",
                        "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/reviews.json",
                        "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/similar.json"
                    }
                }],
                "links": {
                    "self": "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=Toy+Story+3&page_limit=1&page=1",
                    "next": "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=Toy+Story+3&page_limit=1&page=2"
                },
                "link_template": "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q={search-term}&page_limit={results-per-page}&page={page-number}"

            }

        }
    ]);