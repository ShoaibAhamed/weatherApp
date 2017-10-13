jQuery(document).ready(function($) {

      var apiId = 'EbA3reDJ3srVV9oy9rh6X&';
      // var today = new Date();
      // var tomorrow = new Date();
      // tomorrow.setDate(today.getDate()+1);
      // var dayAfterTomorrow = new Date();
      // dayAfterTomorrow.setDate(today.getDate()+2);


      var apiKey= 'iFf54QqLd6Jt2dILrAwcVn52r90qooAjV9aowdkO';
      $.ajax({
         url: "http://api.aerisapi.com/observations/new york,ny?client_id=" + apiId+ "client_secret="+ apiKey,
         dataType: "jsonp",
         success: function(json) {
            if (json.success == true) {
               var ob = json.response.ob;

  


               $('#temp').html('The current weather in New York City ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.tempF + '°');

                $('#feel').html('The current weather in New York City feels like ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.feelslikeF + '°');
                $('#dateTime').html(' The date and time is : ' +  ob.dateTimeISO );
                // $('#dateTime').html('The current weather in New York City feels like ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.dateTimeISO + '°');
                // dateTimeISO = tomorrow;
                // $('#dateTime').html('The current weather in New York City feels like ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.dateTimeISO + '°');


            }
            else {
               alert('An error occurred: ' + json.error.description);
            }
         }
      });
   });




