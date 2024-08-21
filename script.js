const nombre = document.getElementById("nombre");
const cedula = document.getElementById("cedula");
const correo = document.getElementById("correo");
const boton = document.getElementById("boton");
const nombreError = document.getElementById("nombreError");
const cedulaError = document.getElementById("cedulaError");
const correoError = document.getElementById("correoError");
const mensaje = document.getElementById("mensaje");
document.getElementById("mensaje").style.visibility = "hidden";  


function validarNombre () { 
    if(nombre.value.trim() === ""){
        nombreError.style.display = "block";
        return false; 
    }else{
        nombreError.style.display = "none";
        return true;
    }
}

function validarCedula () { 
    if(cedula.value.length < 8){
        cedulaError.style.display = "block";
        return false; 
    } else {
        cedulaError.style.display = "none";
        return true;
    }
}

function validarCorreo () {
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value);
    if(!correoValido){
        correoError.style.display = "block";
        return false; 
    }else{
        correoError.style.display = "none";
        return true;
    }
}

function Enviar () {
    const nombreValido = validarNombre();
    const cedulaValida = validarCedula();
    const correoValido = validarCorreo();

    if(nombreValido && cedulaValida && correoValido){
        mensaje.innerHTML = "Formulario enviado con exito!"
        document.getElementById("mensaje").style.visibility = "visible";
    }else{
        document.getElementById("mensaje").style.visibility = "visible";
    }
}

nombre.addEventListener("input", validarNombre);
cedula.addEventListener("input", validarCedula);
correo.addEventListener("input", validarCorreo);

boton.addEventListener("click", Enviar);