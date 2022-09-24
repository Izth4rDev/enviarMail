//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
//variables para campos
const txtEmail = document.querySelector('#email');
const txtAsunto = document.querySelector('#asunto');
const txtMensaje = document.querySelector('#mensaje');

EventListener();

function EventListener(){

    document.addEventListener('DOMContentLoaded', iniciarApp); //ejecutara cuando se carge correctamente el documento

    //validar campos

    txtEmail.addEventListener('blur', validarFormulario);
    txtAsunto.addEventListener('blur', validarFormulario);
    txtMensaje.addEventListener('blur', validarFormulario);

}


//Funciones

function iniciarApp(){

    console.log('iniciando');
    btnEnviar.disabled = true; //deshabilita el boton enviar
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');//clases tailwind que inhabilita el cursor sobre el elemento y lo vuelve opaco
    console.log(btnEnviar);
    
}

function validarFormulario (e){

    //validamos el largo del value del input para saber si esta vacio

    if(e.target.value.length > 0){

        console.log('aqui hay algo');


    }else{

        e.target.classList.add('border', 'border-red-500');
        mostrarError();
       
    }

}

function mostrarError(){

    console.log('error.....');
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500','p-3', 'mt-5','text-center', 'error');//class tailwind
   

    const errores = document.querySelectorAll('.error'); //queryselectorAll trae todos los elementos de la clase error

    if(errores.length === 0){//si errores es igual a 0 va a inyectar el mensaje de esta forma no se inyectan mensajes cada vez que un campo tiene error

         formulario.appendChild(mensajeError);//inyecta el mensaje en el HTML

    }

    console.log(errores.length);

}