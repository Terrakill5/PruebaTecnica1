//import { useState } from 'react'

import { useState } from 'react'
import "./App.css";
import * as data from './books.json';

function App() {
   let [seleccionados, setSeleccionados] = useState([])
   const [readingList, setReadingList] = useState([])
  
  const res = data.library;
  console.log(res);

  // const dialog = useRef(null)

  const handleAddBook = (book) => {
    const filteredBooks = res.filter(
      (item) => item.book.ISBN !== book.ISBN
    )
    setSeleccionados([].concat(filteredBooks));
    setReadingList(readingList.concat(book))
    console.log(readingList);
    alert('Libro añadido a la lista de lectura')
  }

  const handleRemoveBook = (book) => {
    console.log(readingList)
    console.log(book);
    const newReadingList = readingList.filter(
      (item) => item.ISBN !== book.ISBN
    )
    setReadingList([].concat(newReadingList))
    setSeleccionados(seleccionados.concat(book))
    console.log(readingList);
    console.log(seleccionados);
  }

  /* const handleRemoveBook = (book) => {
    const newReadingList = readingList.filter(
      (item) => item.book.ISBN !== book.book.ISBN
    )
    setReadingList(newReadingList)
    setBooks([...books, book])
  } */
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
              <div key={index.book.ISBN}><img className="cover-img" src={index.book.cover} width="170px" onClick={() => handleAddBook(index.book)} /></div>
            ))}
            <div className=""></div>
            
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="seleccionados">
          <p className="seleccionados-texto">Lista de Lectura</p>
          <div className="grid-seleccionados">
          {readingList && readingList.map((index) => (
              <div key={index.ISBN}><img className="cover-img" src={index.cover} width="170px" onClick={() => handleRemoveBook(index)} /></div>
            ))}
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
