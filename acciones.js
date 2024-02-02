function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
        alert("Todos los campos son obligatorios");
    } else {
        alert("Formulario enviado correctamente");
        // Puedes agregar aquí el código para enviar el formulario, por ejemplo, mediante AJAX.
    }
}