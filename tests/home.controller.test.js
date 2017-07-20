describe('Home', function(){
    beforeEach(angular.module('weather'));
        
    var HomeCtrl,
        scope;
    
    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        HomeCtrl = $controller('HomeCtrl', {
            $scope: scope
        });
    }));
    
    it('should retrieve latitude and longitude', function(){
        
    });
    it('should retrieve JSON with weather report', function(){
        
    });
    it('should retrieve city name', function(){
        
    })
    
})