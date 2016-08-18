var App_A = (function(){

  var forecasts;

  function getForecast(){

    ServerAPI.fetchForecast(
    function(data){
      console.log('Successfully retrieved weather data', data);
      forecasts = data.list;
    },
    function(error){
      console.log('Error retrieving weather data');
    }
    );

  }

  function displayForecast(){

    getForecast();

    console.log('The value of forecasts is...', forecasts);

    forecasts.forEach(function(weatherObj, i){
      var temp = Math.floor((weatherObj.main.temp) * 1.8 - 459.67);
      $('#days')
        .append('<div class="day"><div>' + weatherObj.dt_txt + '</div><div>' 
          + weatherObj.weather[0].description + '</div><div>' + temp + ' degrees</div></div>');
    });

  }

  return {
    displayForecast: displayForecast
  };

})();
