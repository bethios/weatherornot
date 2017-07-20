describe('HomeCtrl', function(){
    beforeEach(module('weather'));
    
    var $controller;
        
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    describe('$scope.getLocation', function(){
        var $scope, controller;
        
        beforeEach(function() {
          $scope = {};
          controller = $controller('HomeCtrl', { $scope: $scope });
        });

        
        it('should retrieve latitude and longitude', function(){
            
        });
    });
    
    describe('retrieveWeather', function(){
    
        it('should retrieve JSON with weather report', function(){

        });
    });
    
    describe('showCurrentCity', function(){

        it('should retrieve city name', function(){

        }) 
    });
    
    describe('getDayOfTheWeek', function(){

        it('should return day of the week for forecast info', function(){

        }) 
    });
}) 