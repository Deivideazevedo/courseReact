import { Link } from "react-router-dom"

export default function Erro() {
    return(
        <header>
            <h1>Pagina nao existente</h1>

            <span>Voce pode estar procurado</span><br />
            <Link to="/">Home</Link><br />
            <Link to="/contato">Contato</Link><br />
            <Link to="/sobre">Sobre</Link>
        </header>
    )
}