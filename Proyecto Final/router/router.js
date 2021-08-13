const routes = [
    { path: "/login", action: "login"},
    { path: "/manager", action: "manager"},
    { path: "/nosotros", action: "nosotros"},
    { path: "/contacto", action: "contacto"}
];

const router = () => {
    let pathOrigen = location.hash.slice(1);
    let pathDestino = routes.find((p) => p.path == pathOrigen);

    switch (pathDestino.action) {
        case routes[0].action:
           $.get("./views/login.html", function(data) {
                $("#app").html(data);
                $('#form-iniciar-sesion').hide();
            });
            break;
        case routes[1].action:
            $.get("./views/manager.html", function(data) {
                $("#app").html(data);
            });
            break;
        case routes[2].action:
            $.get("./views/nosotros.html", function(data) {
                $("#app").html(data);
            });
            break;
        case routes[3].action:
            $.get("./views/contacto.html", function(data) {
                $("#app").html(data);
            });
            break;
        default:
            break;
    }
};

const CargarLogin = () => {
    $.get("./views/login.html", function(data) {
        $("#app").html(data);
        $('#form-iniciar-sesion').hide();
    });
}