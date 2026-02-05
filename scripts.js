document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    
    if (user === "barnaby" && pass === "78382055") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("content-section").style.display = "block";
    }
    
    // Dependencias (redirige a carpeta)
    else if (user === "gobierno" && pass === "1234") {
        window.location.href = "dependencias/gobierno.html"; 
    } 
    else if (user === "JuanM" && pass === "juan2910") {
        window.location.href = "dependencias/planeacion.html"; 
    } 
    else if (user === "obras" && pass === "1234") {
        window.location.href = "dependencias/obras.html"; 
    } 
    else if (user === "educacion" && pass === "1234") {
        window.location.href = "dependencias/educacion.html"; 
    } 
    else if (user === "salud" && pass === "1234") {
        window.location.href = "dependencias/salud.html"; 
    } 
    else if (user === "umata" && pass === "1234") {
        window.location.href = "dependencias/umata.html"; 
    } 
    else if (user === "hacienda" && pass === "1234") {
        window.location.href = "dependencias/hacienda.html"; 
    } 

    // Error
    else {
        document.getElementById("login-error").style.display = "block";
    }
});

function showContent(role) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("content-section").style.display = "block";

    if (role === "jefe") {
        document.getElementById("tabla-jefe").style.display = "block";
    } else {
        document.getElementById("tabla-jefe").style.display = "none";
    }
}

function logout() {
    location.reload();
}

    // ver contraseña
function togglePassword() {
  const passwordField = document.getElementById("contrasena");
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;
}

function togglePasswordVisibility(icon) {
  const passwordInput = document.getElementById("password");
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
}





