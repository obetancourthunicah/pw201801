//Declaraciones
function btnGuardar_onClick(e){
  e.preventDefault();
  e.stopPropagation();
  var error = false;
  var txtNombre = document.getElementById('txtNombre');
  if(txtNombre.value){
    //https://regex101.com/
    if((/^\s*$/).test(txtNombre.value)||!(/^[A-Za-z\sñÑáéíóúü']*$/).test(txtNombre.value)){
      //alert("El nombre tiene caracteres no válidos.")
      document.getElementById('errorMsgNombre').innerHTML += "El nombre tiene caracteres no válidos."
      txtNombre.focus();
      txtNombre.classList.add("error");
      error= true;
    }
  }else{
    //alert('El Nombre es Requerido');
    document.getElementById('errorMsgNombre').innerHTML = "El Nombre es Requerido";
    txtNombre.focus();
    txtNombre.classList.add("error");
    error=true;
  }

  /// /^\(\+\d\d\d\)\s\d\d\d\d\-?\d\d\d\d$/

  //Si No hay errores entonces enviar
  if(!error){
    var formulario = document.getElementById('');
    formulario.submit();
  }
}

// Vamos obtener la referecia al boton guardar

// DOM Documento Object Model
var btnGuardar = document.getElementById('btnGuardar');

//Binding del evento click al boton btnGuardar
btnGuardar.addEventListener('click',btnGuardar_onClick);
