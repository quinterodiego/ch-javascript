window.onload = CargarLogin();

$(window).on("hashchange", function () {
  router();
});

const EnviarComentario = (event) => {
  $('#form-contacto button').attr('data-toggle', 'modal').attr('data-target', '#modalComentario');

  setInterval(() => {
      window.location = './index.html';
  }, 1000);
  
  event.preventDefault();
}