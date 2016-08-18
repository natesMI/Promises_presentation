var ServerAPI = (function(){

   function fetchForecast(fetchSuccess, fetchError) {
     $.ajax({
       url: 'http://api.openweathermap.org/data/2.5/forecast?q=sanfrancisco,us&&appid=' + API_KEY,
       type: 'GET',
       success: fetchSuccess,
       error: fetchError,
     });
   }

   return {
     fetchForecast: fetchForecast
   };

 })();








 