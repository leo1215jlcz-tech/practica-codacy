<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login Vulnerable</title>
</head>
<body>

<h2>Ingreso de sesión</h2>

<form onsubmit="return validarLogin()">
    <label>Usuario:</label><br>
    <input type="text" id="usuario"><br><br>

    <label>Contraseña:</label><br>
    <input type="password" id="password"><br><br>

    <button type="submit">Ingresar</button>
</form>

<script>
function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    // ❌ Credenciales hardcodeadas
    if (usuario == "admin" && password == "1234") {
        alert("Acceso concedido");
    } else {
        alert("Usuario o contraseña incorrectos");
    }

    // ❌ No se valida longitud ni contenido
    return false;
}
</script>

</body>
</html>
