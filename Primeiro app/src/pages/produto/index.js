import { Link, useParams } from "react-router-dom"

export default function Produto() {
    const {id} = useParams();
    return(
        <header>
        <h2>Pagina de produtos</h2>
        <p>Seu id é: {id}</p>
        <Link to="/">Home</Link>
        </header>
    )
}