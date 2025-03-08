import { useEffect, useState } from "react";
import '../styles/requisicoesHttp.css';

function RequisicoesHTTP({url}) {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      fetch(url)
      .then((response)=> response.json())
      .then((json)=>{
        console.log(json);
        setNutri(json)
      })
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"/>
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default RequisicoesHTTP;
