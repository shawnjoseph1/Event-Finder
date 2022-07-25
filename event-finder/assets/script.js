$('form').submit(function (event) {
  event.preventDefault();
  console.log('This is working');
  var tmApiUrlRoot = 'https://app.ticketmaster.com/discovery/v2/events?apikey=bxA202NsGHlp2jqKOCsAbRGtvfyWnqaJ&locale=*&city=';

  var userInputValue = $('#search').val();

  console.log('user input: ', userInputValue);
  var tmApiUrl = tmApiUrlRoot + String(encodeURIComponent(userInputValue));
  console.log(tmApiUrl);
  getUserData(tmApiUrl);
});

function getUserData(url) {
  fetch(url)
  .then(function (request) {
      
      return request.json();
  })

  .then(function (data) {
      results = JSON.stringify(data);
      theresults = JSON.parse(results)
      console.log(results)

              // delete previous results once the user submits a new search
              $('#event1').empty();
              $('#event2').empty();
              $('#event3').empty();
    
              // append new results
              for (var i = 0; i < 1; i++) {
                $('#event1').append('<h2>' + theresults._embedded.events[i].name + '</h2>');
                $('#event1').append('<h3>' + theresults._embedded.events[i]._embedded.venues[0].name + '</h3>');
                $('#event1').append('<h3>' + theresults._embedded.events[i].dates.start.localDate + '</h3>');
                $('#event1').append('<img src="' + theresults._embedded.events[i].images[1].url + '">');
                }
              for (var i = 1; i < 2; i++) {
                $('#event2').append('<h2>' + theresults._embedded.events[i].name + '</h2>');
                $('#event2').append('<h3>' + theresults._embedded.events[i]._embedded.venues[0].name + '</h3>');
                $('#event2').append('<h3>' + theresults._embedded.events[i].dates.start.localDate + '</h3>');
                $('#event2').append('<img src="' + theresults._embedded.events[i].images[1].url + '">');
                }
              for (var i = 2; i < 3; i++) {
                $('#event3').append('<h2>' + theresults._embedded.events[i].name + '</h2>');
                $('#event3').append('<h3>' + theresults._embedded.events[i]._embedded.venues[0].name + '</h3>');
                $('#event3').append('<h3>' + theresults._embedded.events[i].dates.start.localDate + '</h3>');
                $('#event3').append('<img src="' + theresults._embedded.events[i].images[1].url + '">');
                }         
      }); 
      
   }
