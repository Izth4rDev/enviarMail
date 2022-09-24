//Variables
const btnEnviar = document.querySelector('#enviar');
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
       
    }

}