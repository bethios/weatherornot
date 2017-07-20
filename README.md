## Weather app
- uses geolocation to request location access. 
- parses location info to get longitude and latitude.
- pulls five day weather forecast based on user location via Open Weather API.
- pulls city name using nominatim API. 
- parses day of the week from unix timestamp. 
- accessibility features include sr-only div's for background image, alt text for icons

## Configuration

Start by cloning the repository:

```
$ git clone https://github.com/bethios/weather.git
```

The project uses Grunt to run tasks in development.
Install the project dependencies by running:

```
$ npm install
```

## Run the Application

Run the application using the Gruntfile's `default` task:

```
$ grunt
```

The default task runs a simple server on port 3000. To view it in a any browser, go to [http://localhost:3000](http://localhost:3000).

