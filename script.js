document
  .getElementById("clienteForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document
      .getElementById("nombre")
      .value.trim();
    const apellido = document
      .getElementById("apellido")
      .value.trim();
    const email = document
      .getElementById("email")
      .value.trim();
    const telefono = document
      .getElementById("telefono")
      .value.trim();
    const direccion = document
      .getElementById("direccion")
      .value.trim();

    if (
      nombre &&
      apellido &&
      email &&
      telefono &&
      direccion
    ) {
      document.getElementById(
        "resultado"
      ).innerHTML = `
      <strong>Datos Ingresados:</strong><br>
      Nombre: ${nombre} ${apellido}<br>
      Email: ${email}<br>
      Teléfono: ${telefono}<br>
      Dirección: ${direccion}
    `;
    } else {
      alert(
        "Por favor, completa todos los campos."
      );
    }
  });

function limpiarFormulario() {
  document.getElementById("clienteForm").reset();
  document.getElementById("resultado").innerHTML =
    "";
}
