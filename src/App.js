import './App.css';
import ListaDeTareas from './Componentes/ListaDeTareas';
import logo from './Imagenes/logoblanco.png'

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={logo}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
       <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
