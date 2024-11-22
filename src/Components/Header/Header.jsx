import logoLivro from "../../assets/logolivro.png"
import Lupa from "../../assets/Lupa.png"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Inicio from "../../pages/inicio/Inicio"
import LivrosDoados from "../../pages/livrosDoados/LivrosDoados"
import QueroDoar from "../../pages/QueroDoar/QueroDoar"
import s from "./header.module.scss"

export default function Header() {
    return(
        <BrowserRouter>
        <header className={s.header}>
            <section className={s.containerLogo}>
                <img className={s.imgLivro} src={logoLivro} alt="Logo de um livro aberto" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={s.conteinerNav}>   
                <ul>
                    <li>
                        <Link className={s.link} to="/">Início</Link>
                    </li>
                    <li>
                        <Link className={s.link} to="/livros-doados">Livros Doados</Link>
                    </li>
                    <li>
                        <Link className={s.link} to="/quero-doar">Quero Doar</Link>
                    </li>
                </ul>
            </nav>
            <section className={s.containerPesquisa}>
                <input type="search" name="" id="" placeholder="O que você procura?"/>
                <button type="submit">
                <img src={Lupa} alt="Imagem de uma lupa branca"/>
                </button>
            </section>
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/livros-doados" element={<LivrosDoados/>}/>
            <Route path="/quero-doar" element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )
}

