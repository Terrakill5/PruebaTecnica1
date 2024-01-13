//import { useState } from 'react'

import "./App.css";
import * as data from './books.json';

function App() {
  // const [count, setCount] = useState(0)
  
  const res = data.library;
  console.log(res);
  // const listaLectura = [];
  
  return (
    <>
      <main>
        <div className="disponibles">
          <h3>{res.length} libros disponibles</h3>
          <h4>2 en la lista de lectura</h4>
          <div className="Filtro">
            <div className="Filtro-pagina">
              <h5>Filtrar por páginas</h5>
              <p></p>
            </div>
            <div className="Filtro-genero">
              <h5>Filtrar por género</h5>
              <div></div>
            </div>
          </div>
          <div className="grid">
            {res && res.map((index) => (
              <div key={index.book.cover}><img src={index.book.cover} width="170px" /></div>
            ))}
            <div className=""></div>
            
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="seleccionados">
          <p className="seleccionados-texto">Lista de Lectura</p>
          <div className="grid-seleccionados">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
