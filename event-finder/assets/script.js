$(function () {
    var tmApiUrlRoot = 'https://app.ticketmaster.com/discovery/v2/';
    console.log('This is working');
    $('#search').click(function (event) {
      event.preventDefault();
      var userInputValue = $('#search').val();
      console.log('user input: ', userInputValue);
      var tmApiUrlRoot = tmApiUrlRoot + userInputValue;
      console.log(tmApiUrl);
      getUserData(tmApiUrl);
    });
  });
  function getUserData(url) {
    fetch(url)
      .then(function (request) {
        return request.json();
      })
      .then(function (data) {
        console.log(data);
        showUserData(data);
      });
  }
  function showUserData(data) {
    $('#user').text(data.login);
  }