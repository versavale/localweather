$(document).ready(function() {
  
  /*get location on page load */
    navigator.geolocation.getCurrentPosition(function(location) {
      var lat = location.coords.latitude;
      var lon = location.coords.longitude;

      lat = "lat="+lat;
      lon = "lon="+lon;
      
  /*get stats from FCC api*/
        
 $.getJSON("https://fcc-weather-api.glitch.me/api/current?"+lat+ "&" + lon, function(weather) {
      
  var city = weather.name;
  var country = weather.sys.country;
  var iconURL = weather.weather[0].icon;
  var tempC = weather.main.temp;
  var tempF = (Math.round(tempC*1.8)+32);
  var sky = weather.weather[0].description;
   sky = sky.charAt(0).toUpperCase()+sky.slice(1);
  var hum = weather.main.humidity;
    
   $(".location").text(city + ", " + country);
   $(".temperatureC").text(tempC+ "°C");
   $(".temperatureF").text(tempF+ "°F");
   $(".sky").text(sky);
   $(".icon").html("<img src='" +iconURL+ "'>");
   $(".humidity").text(hum+" % Humidity");

    });
  });
  
   $(".temperatureF").hide();
    $(".temperatureC, .temperatureF").on('click', function() {
      $('.temperatureC, .temperatureF').toggle();
    });

});
