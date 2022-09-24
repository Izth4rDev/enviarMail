//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const btnReset = document.querySelector('#resetBtn');
//expresion regular que evalua si el campo email esta en el formato correcto        
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

    //enviar formulario

    formulario.addEventListener('submit', enviarEmail);

    //resetear formulario

    btnReset.addEventListener('click', resetearFormulario);

}

//Funciones

function iniciarApp(){

    //console.log('iniciando');
    btnEnviar.disabled = true; //deshabilita el boton enviar
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');//clases tailwind que inhabilita el cursor sobre el elemento y lo vuelve opaco
    
}

function validarFormulario (e){
    
    //validamos el largo del value del input para saber si esta vacio

    if(e.target.value.length > 0){
         //eliminar el mensaje de error
        const errorMens = document.querySelector('p.error');
        
        if(errorMens){
            errorMens.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{
        console.log('dentro de campo vacio');
        const errorEmptyMensaje = 'Todos los campos son obligatorios';
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError(errorEmptyMensaje); 
    }

    if(e.target.type === 'email'){
 
        const errorMailMensaje = 'debe ingresar el formato de correo correcto';
       
         if(emailRegex.test(e.target.value)){
            const errorMensMail = document.querySelector('p.error');
            
            if(errorMensMail){
                errorMensMail.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');

         }else{

            console.log('dentro de mail error');
            mostrarError(errorMailMensaje);
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');

         }
    }

    //habilitar o deshabilitar el boton cuando la validacion es completa

    if(emailRegex.test(txtEmail.value) && txtAsunto.value !== '' && txtMensaje.value!==''){
        console.log('pasaste la validacion');
        btnEnviar.disabled = false; //deshabilita el boton enviar
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }else{
        btnEnviar.disabled = true; //deshabilita el boton enviar
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje){

    console.log('error.....');
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500','p-3', 'mt-5','text-center', 'error');//class tailwind
   

    const errores = document.querySelectorAll('.error'); //queryselectorAll trae todos los elementos de la clase error

    if(errores.length === 0){//si errores es igual a 0 va a inyectar el mensaje de esta forma no se inyectan mensajes cada vez que un campo tiene error

         formulario.appendChild(mensajeError);//inyecta el mensaje en el HTML

    }

    console.log(errores.length);

}

//envia el email

function enviarEmail (e){

    e.preventDefault();
    //mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    //despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(()=>{
        console.log('esta funcion se ejecuta despues de 3 segundos');
        spinner.style.display = 'none';

        //enviar mensaje de mensaje enviado

        const parrafoEnvi = document.createElement('p');
        parrafoEnvi.textContent = 'Mensaje enviado correctamente';
        parrafoEnvi.classList.add ('text-center', 'my-10', 'p-2', 'text-white','bg-green-500','font-bold', 'uppercase');
        //inserta el parrafo antes del spinner
        formulario.insertBefore(parrafoEnvi, spinner);

        setTimeout (()=> {
            parrafoEnvi.remove();
            resetearFormulario();
        },5000);

    }, 3000);

   

    /*setInterval(()=>{
        console.log('esta funcion se ejecuta cada de 3 segundos'); 
    },3000);*/
}

//funcion resetear formulario

function resetearFormulario (){

    formulario.reset();
    iniciarApp();

}