// import { useState } from "react";
// import Nome from "./components/Nome";
// import Tarefa from "./components/tarefa";
// import Formulario from "./components/Formulario";
// import Efect from "./components/useEfect";
// import RequisicoesHttp from "./components/RequisicoesHttp";
import { Link } from "react-router-dom";



export default function Home() {  
    return (
      <div>
        <h1>Bem vindo a pagina Home!</h1>
        <Link to="/sobre">Sobre</Link><br />
        <Link to="/contato">Contato</Link>

      </div>
    );
}
  