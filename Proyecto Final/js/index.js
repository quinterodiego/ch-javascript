window.onload = CargarLogin();

$(window).on("hashchange", function () {
  router();
});