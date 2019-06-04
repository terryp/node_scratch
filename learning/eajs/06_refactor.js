function getUser(id) {
  return new Promise((resolve, reject) => {
    $.getJSON({
      url: `https://api.github.com/users/${id}`,
      success: resolve,
      error: reject
    });
  });
}

function getWeather(user) {
  return new Promise((resolve, reject) => {
    $.getJSON({
      url: getLocationURL(user.location.split(',')),
      success: resolve,
      error: reject
    });
  });
}

$('#btn').on('click', () => {
  getUser(
    'tylermcginnis',
    user => {
      getWeather(
        user,
        weather => {
          updateUI({
            user,
            weather: weather.query.results
          });
        },
        showError
      );
    },
    showError
  );
});
