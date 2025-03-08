import { Link } from "react-router-dom";

export default function Sobre() {
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
  
    return (
      <div>
        <h1>Sobre o curso Reactjs</h1>
        <Link to="/">Home</Link><br />
        <Link to="/contato">Contato</Link>
      </div>
    );
}
  
  