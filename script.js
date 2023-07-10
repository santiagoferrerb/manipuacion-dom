const h1 = document.querySelector('h1');
const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

// Escuchar cada vez que suceda un evento definido en una etiqueta HTML
btn.addEventListener("click", btnOnClick);

function btnOnClick(){
    const suma = Number(input1.value) + Number(input2.value);
    resultado.innerText =  input1.value + " + " + input2.value + " = "  + suma;
    input1.value = "";
    input2.value = "";
}



//cuando se trabaja con formularios es mas complejo
//ya que la etiqueta form de HTML por default entiende el ultimo boton
//como el boton de submit y al unidr click actualiza la pagina para enviar la info en el link
// debemos cambiar la propiedad para este ejercicio

// form.addEventListener("submit", sumarNumeros);

//el addEventListener envia como argumento a la funcion:
//event que es un objeto con las acciones que suceden
//en este caso envia : {event: submitEvent}

// function sumarNumeros(event){
//     event.preventDefault();    //event tiene propiedades y para que no reinicie se hace esto
//     const suma = Number(input1.value) + Number(input2.value);
//     resultado.innerText =  input1.value + " + " + input2.value + " = "  + suma;
//     input1.value = "";
//     input2.value = "";
// }