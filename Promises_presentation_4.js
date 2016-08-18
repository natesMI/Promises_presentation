var App_B = (function(){

  var forecasts;

  function getForecast(){

    return new Promise(function(resolve, reject){
      ServerAPI.fetchForecast(function(data){
        console.log('Successfully retrieved weather data', data);
        forecasts = data.list;
        resolve();
      },
      function(error){
        console.log('Error retrieving weather data');
        reject();
      });
    });

  }

  function displayForecast(){

    getForecast()
      .then(function(response){
        forecasts.forEach(function(weatherObj, i){
          var temp = Math.floor((weatherObj.main.temp) * 1.8 - 459.67);
          $('#days')
            .append('<div class="day"><div>' + weatherObj.dt_txt + '</div><div>' 
              + weatherObj.weather[0].description + '</div><div>' + temp + ' degrees</div></div>');
        });
      })
      .catch(function(error){
        $('#days').append('<div class="day">Please try again later</div>');
      });

  }

  return {
    displayForecast: displayForecast
  };

})();
