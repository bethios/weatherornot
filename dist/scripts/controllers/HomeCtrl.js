(function() {
    function HomeCtrl($scope, $http, $q) {
        this.getDayOfTheWeek = function(timestamp){
            var daysOfTheWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            var date = new Date(timestamp * 1000);
            return daysOfTheWeek[date.getDay()]
        }
        
        function showCurrentCity(latitude, longitude){
            $http.get('http://nominatim.openstreetmap.org/reverse?format=json&lat=' + latitude + '&lon=' + longitude + '&zoom=18&addressdetails=1').then(function(response){
                $scope.currentCity = response.data.address.city
            })
        }
        
        function showLocationWeather(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            retrieveWeather(latitude, longitude);
            showCurrentCity(latitude, longitude)
        }

        function errorHandler(err) {
            if(err.code == 1) {
                alert("Error: Access is denied! Showing weather for Rocketmiles HQ.");
            }

            else if( err.code == 2) {
                alert("Error: Position is unavailable! Showing weather for Rocketmiles HQ.");
            }
            var latitude = 41.885826;
            var longitude = -87.644428;
            retrieveWeather(latitude, longitude);
        }

        this.getLocation = function(){
            if(navigator.geolocation){
                var options = {timeout:60000};
                navigator.geolocation.getCurrentPosition(showLocationWeather, errorHandler, options);
            } else{
                alert("Sorry, browser does not support geolocation! Showing weather for Rocketmiles HQ.");
                var latitude = 41.885826;
                var longitude = -87.644428;
                retrieveWeather(latitude, longitude);
                showCurrentCity(latitude, longitude)
            }
        };

        function retrieveWeather(latitude, longitude) {
            $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + latitude + '&lon=' + longitude + '&cnt=5&units=imperial&appid=48af7c76952a3ced5dee3677937dd788').then(function (response) {
                    $scope.weather = response.data.list;
                },
                function (error) {
                    alert("Unable to retrieve weather data.")
                }
            );
        }
    }

    angular
        .module('weather')
        .controller('HomeCtrl', ['$scope', '$http', HomeCtrl]);
})();