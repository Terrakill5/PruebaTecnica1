//import { useState } from 'react'

import { useState, useEffect } from 'react'
import "./App.css";
import * as data from './books.json';

function App() {

  const [seleccionados, setSeleccionados] = useState([])
  const [readingList, setReadingList] = useState([])
  
  useEffect(() => {
    
    setSeleccionados([].concat(data.library));
  }, []);

  useEffect(() => {
   console.log("tamaño seleccionados", seleccionados.length)
   console.log("tamaño readingList", readingList.length)
  }, [seleccionados,readingList]);
  const res = data.library;
  
  

  // const dialog = useRef(null)

  const handleAddBook = (book) => {
    const filteredBooks = seleccionados.filter(
      (item) => item.book.ISBN !== book.ISBN
    )
    setSeleccionados([].concat(filteredBooks));
    setReadingList(readingList.concat(book))
    console.log(readingList);
    alert('Libro añadido a la lista de lectura')
  }

  const handleRemoveBook = (book) => {
    //console.log(readingList)
    console.log(book);
    const newReadingList = readingList.filter(
      (item) => item.ISBN !== book.ISBN
    )
    //console.log(newReadingList);
    setReadingList([].concat(newReadingList))
    handleSeleccionadosFilter();
    
  }

  const handleSeleccionadosFilter = () => {
    if(readingList.length === 0) {
      setSeleccionados([].concat(data.library))
    }
    else {
      const filteredBooks = res.filter(
      (item) => {
        let comparacion = true;
        let index = 0;
        while(index < readingList.length && comparacion === true){
          comparacion = item.book.ISBN !== readingList[index].ISBN
          index++;
        }
        return comparacion;
      }
      ) 
    console.log("actualizar luego de borrar",filteredBooks);
    setSeleccionados([].concat(filteredBooks));
    }
    
  }

  const handleChangeGenre = (e) => {
    console.log(e.target.value);
    const evento = parseInt(e.target.value);
    let filteredBooks;
    
    switch(evento) {
      case 1:
        handleSeleccionadosFilter();
      break;

      case 2:
        filteredBooks = res.filter(
          (item) => item.book.genre === "Terror"
        )
        setSeleccionados([].concat(filteredBooks));
        console.log(seleccionados);

      break;
      case 3:
        filteredBooks = res.filter(
          (item) => item.book.genre === "Ciencia ficción"
        )
        setSeleccionados([].concat(filteredBooks));
        console.log(seleccionados);

      break;

      case 4:
        filteredBooks = res.filter(
          (item) => item.book.genre === "Zombies"
        )
        setSeleccionados([].concat(filteredBooks));
        console.log(seleccionados);

      break;

      case 5:
        filteredBooks = res.filter(
          (item) => item.book.genre === "Fantasía"
        )
        setSeleccionados([].concat(filteredBooks));
        console.log(seleccionados);

      break;

      default:
        console.log("por aqui no debio ir");

      break;
    }
  }
  
  return (
    <>
      <main>
        <div className="disponibles">
          <h3>{seleccionados.length} libros disponibles</h3>
          {readingList.length !== 0 && <h4>{readingList.length} en la lista de lectura</h4>}
          <div className="Filtro">
            <div className="Filtro-pagina">
              <h5>Filtrar por páginas</h5>
              <p></p>
            </div>
            <div className="Filtro-genero">
              <h5>Filtrar por género</h5>
              <div>
                
                <select name="genero" onChange={handleChangeGenre}> 
                <option value="1" defaultChecked>Todas </option>
                <option value="2">Terror</option>
                <option value="3">Ciencia Ficcion</option>
                <option value="4">Zombies</option>
                </select> 
                  </div>
            </div>
          </div>
          <div className="grid">
            {seleccionados && seleccionados.map((index) => (
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
