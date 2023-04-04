/*
Nodo de elemento:
Es toda etiqueta HTML (tipo 1)

Nodo de tipo texto:
Es el contenido en una etiqueta (tipo 3)

Nodo de comentario:
Todo comentario (tipo 8)
*/

//ACCEDER A ELEMENTOS DEL HTML
//1. Mediante getElementById()
const titulo = document.getElementById('tituo');
console.log(titulo);
console.log(titulo.textContent);
//titulo.textContent = 'Nuevo valor para h1';
console.log(titulo.textContent);
//2. Mediante querySelector()
const parr = document.querySelector('.parrafo');
console.log(parr);

const parr2 = document.querySelector('.parrafo:nth-child(3)');//index 1
console.log(parr2);

const titulo2 = document.querySelector('.bloque');
const sp = titulo2.querySelector("span");
console.log(sp);

const sp2 = document.getElementById('tituo').querySelector('span');
console.log(sp2);

//3. Mediante querySelectorAll()
const parrafos = document.querySelectorAll('.parrafo');
console.log(parrafos);

parrafos[2].style.color = 'blue';

//parrafos.map(p=>p.style.color='green');//Error
const parrafos2 = [...document.querySelectorAll('.parrafo')];
parrafos2.map(p=>p.style.color = 'green');

const parrafos3 = Array.from(document.querySelectorAll('.parrafo'));
parrafos3.map(prf=>prf.style.color = 'red');

//HABLEMOS SOBRE MODIFICACIÓN DE ATRIBUTOS Y CLASES
//getAttribute()
const usuario = document.getElementById('usu');
console.log(usuario);
console.log(usuario.getAttribute('type'));
console.log(usuario.getAttribute('id'));
//setAttribute()
//usuario.setAttribute('type','number');
//usuario.setAttribute('type','date');
//usuario.setAttribute('type','radio');

//Agregar una, o varias, clases mediante add
const titulo3 = document.getElementById('tituo');
titulo3.classList.add('compras');
titulo3.classList.add('empresa','invierno');
//Eliminar una, o varias clases mediante remove
titulo3.classList.remove('bloque');
titulo3.classList.remove('invierno');
//Saber si tiene una clase o no, mediante contains
if(titulo3.classList.contains('invierno'))
    console.log("titulo3 contiene una clase llamada invierno");
else
    console.log("titulo3 NO contiene una clase llamada invierno");

//Reemplazar una clase mediante replace
titulo3.classList.replace('compras','ventas');

//Interactuando con Atributos inmediatos de un elemento HTML
const lbl = document.getElementById('usu');
lbl.value="Ana";
console.log(lbl.value);
console.log(lbl.value.length);
console.log(titulo3.innerHTML);
console.log(titulo3.textContent);

//EVENTO
//elemento.addEventListener('evento', callback);
const boton = document.getElementById('btn');
boton.addEventListener('click', ()=>{
    console.log('Se hizo clic');
    alert('Click!!');
});

const boton2 = document.getElementById('btn2');
boton2.addEventListener('dblclick', ()=>{
    console.log('Se hizo doble clic');
});
boton2.addEventListener('mouseenter',()=>{
    console.log('Ingresamos al botón, con el mouse');
});

const cuadrado = document.getElementById('cuadro');
cuadrado.addEventListener('mouseenter', ()=>{
    cuadrado.style.background = "yellow";
});

cuadrado.addEventListener('mouseleave', ()=>{
    cuadrado.style.background = "chartreuse";
});

const cuadrado2 = document.getElementById('cuadro2');
cuadrado2.addEventListener('mouseenter',()=>{
    cuadrado2.classList.replace('verde','amarillo');
});
cuadrado2.addEventListener('mouseleave',()=>{
    cuadrado2.classList.replace('amarillo','verde');
});
cuadrado2.addEventListener('mousedown',()=>{
    console.log("Se dio clic en cuadrado2");
});
cuadrado2.addEventListener('mouseup',()=>{
    console.log("Se soltó clic en cuadrado2");
});
cuadrado.addEventListener('mousemove',()=>{
    console.log('Se está moviendo el mouse dentro del cuadrado');
});

//Eventos de teclado
usuario.addEventListener('keydown',()=>{
    console.log('Se tecleó');
});
usuario.addEventListener('keyup',(evento)=>{//Se gatilla cuando se suelta una tecla
    console.log('Se soltó una tecla');
    console.log(usuario.value);
    //console.group(event);
    console.log(evento.key);
    console.log(evento.sourceCapabilities.firesTouchEvents);
});
usuario.addEventListener('keypress',(evento)=>{
    console.log('Se está presionando una tecla');
    console.log(evento);
});

//EVENT (objeto)
const formulario = document.getElementById('formulario');

//Evento a todo el documento
window.addEventListener('click',(evento)=>{
    console.log(evento);
});

boton2.addEventListener('click',(evento)=>{
    console.log(evento.target);
    usuario.value="Pepe";
});

//Otro ejemplo
//Manejar eventos en un grupo de elementos
const casillas = document.getElementById('casillas');
casillas.addEventListener('click',(e)=>{
    console.log(e.target.textContent);
    e.target.classList.add('verde');
});

//Evento sobre formulario
formulario.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    console.log('Se intenta enviar el formulario');
});

const hipervinculo = document.getElementById('ancla');
hipervinculo.addEventListener('click',(evento)=>{
    evento.preventDefault();
    boton2.click();
});

//Eventos que se pueden gatillar (trigger)

//formulario.submit();

boton2.addEventListener('dblclick', ()=>{
    usuario.value="Pepe";
});
