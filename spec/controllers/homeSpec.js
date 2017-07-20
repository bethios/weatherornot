require('../../scripts/controllers/HomeCtrl.js');

describe('HomeCtrl', function(){    
    describe('showCurrentCity', function(){            
        it('should retrieve latitude and longitude for Chicago', function(){
            var latitude = 41.885826;
            var longitude = -87.644428;
            expect(showCurrentCity(latitude, longitude)).toEqual('Chicago')
        });
    });
    
    describe('retrieveWeather', function(){
        it('should retrieve JSON with weather report', function(){
            var latitude = 41.885826;
            var longitude = -87.644428;
            retrieveWeather(latitude, longitude)
            expect(response).toContain('dt')
        });
        it('should throw an error for nil values', function(){
            var latitiude = nil;
            var longitude = nil;
            retrieveWeather(latitiude, longitude);
            expect(response).toEqual('{"error": "404"}');
        })
    });
    
    describe('getLocation', function(){
        it('should retrieve Chicago for latitude and longitude', function(){
            var latitude = 41.885826;
            var longitude = -87.644428;
            getLocation(latitude, longitude)
            expect(response).toEqual('Chicago')
        });
        it('should retrieve London for latitude and longitude', function(){
            var latitude = 51.507858;
            var longitude = -0.087685;
            getLocation(latitude, longitude)
            expect(response).toEqual('London')
        });
        it('should retrieve Sydney for latitude and longitude', function(){
            var latitude = -33.856535;
            var longitude = 151.215243;
            getLocation(latitude, longitude)
            expect(response).toEqual('Sydney')
        });
    });
    
    describe('getDayOfTheWeek', function(){
        it('should return day of the week for forecast info', function(){
            home.getDayOfTheWeek();
            expect(response).toContain("day");
        }) 
        
    });
}) 