//Variables
const btnEnviar = document.querySelector('#enviar');



EventListener();

function EventListener(){

        document.addEventListener('DOMContentLoaded', iniciarApp); //ejecutara cuando se carge correctamente el documento


}


//Funciones

function iniciarApp(){

    console.log('iniciando');
    btnEnviar.disabled = true; //deshabilita el boton enviar
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');//clases tailwind que inhabilita el cursor sobre el elemento y lo vuelve opaco
    console.log(btnEnviar);
    
}

