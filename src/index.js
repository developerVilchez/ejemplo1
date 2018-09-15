import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Objeto con los datos en null
const data = {
 usuario:null,
 email : null,
 password : '123456',
 ingresar : false,
}

/* Variable a la cual le asignaré siempre un elemento JSX como unidad, es decir como bloque
y cada vez que la use siempre se asignará un elemento JSX
*/
let App;

 // Función manejadora del evento click, solo se invoca cuando el usuario le da click al boton de logearse
 const handleOnclickLogin = () =>{
  data.ingresar = true;
  if(data.ingresar){
   App = (
    <div>
      <h1>Ingresa tus datos por favor</h1>
       {Form}
    </div>
   )
  }
  ReactDOM.render(App, document.getElementById('root'));
 }
 

// Función manejadora del evento submit del formulario : solo se invoca (ejecuta) cuando el usuario de click al formulario enviandonos sus datos
const handleSubmit = (e) => {
 e.preventDefault();
 //console.log(e.target.children)
 //console.log(e.target.children[0].value);
 //console.log(e.target.children[1].value);
 //console.log(e.target.children[2].value);
 data.usuario = e.target.children[0].value;
 data.email = e.target.children[1].value
 if(e.target.children[2].value === data.password){
  App = (
   <div>
     <h1>Empezando con React ? </h1>
     <h2>Bienvenido {data.usuario}</h2>
     <p>Cualquier información te la enviaremos sobre React te la enviareamos a {data.email}</p>
   </div>
  )
  ReactDOM.render(App, document.getElementById('root'));
 } else {
  alert('La contraseña es invalida')
 }
} 

// Variable que guarda el bloque jsx que representa a la vista de inicio
const Welcome = (
  <div>
  <h1>Bienvenido a React</h1>
  <p>Para poder ingresar deberas logearte</p>
  <button onClick = {handleOnclickLogin}>Logaerte</button>
 </div>
)

// Variabla que guarda el bloque jsx que representa a un formulario
const Form = (
 <form action="#" onSubmit={handleSubmit}>
      <input type="text" placeholder="usuario" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="Password" />
      <input type="submit" />
  </form>
 )



// Aqui empezamos con una condición si no hay usuario que App tome el valor de welcome
if (!data.usuario){
 console.log(data) 
  App = Welcome 
 }
// Aqui renderizamos app con el valor de welcome
ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
