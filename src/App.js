import "./styles.css";
import { Filtro } from "./components/Filtro";
import { Personajes } from "./components/Personajes";
import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [loading, setLoading] = useState(true);
  const [personajes, setPersonajes] = useState([]);
  const [texto, setTexto] = useState("");
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchPersonajes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setLoading(false);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPersonajes(initialUrl);
  }, []);

  const personajesFiltrador = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(texto.toLowerCase())
  );

  const onPrevious = () => {
    fetchPersonajes(info.prev);
  };

  const onNext = () => {
    fetchPersonajes(info.next);
  };

  return (
    <>
      <div className="container">
        <figure>
          <img
            src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
            alt="rick and morty"
          />
          {/* Form Filtrar */}
          <Filtro texto={texto} setTexto={setTexto} />
          {/* Pagination */}
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
          {/* Seccion de personajes */}
          {loading ? (
            <div>Cargando...</div>
          ) : (
            <Personajes texto={texto} personajes={personajesFiltrador} />
          )}
        </figure>
      </div>
    </>
  );
}

export default App;
