import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from "./components/header";
import Erro from "./pages/Error";
import Produto from "./pages/produto";


const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/produto/:id" element={<Produto/>}></Route>
                <Route path="*" element={<Erro />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
