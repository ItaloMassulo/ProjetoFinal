import s from "./querodoar.module.scss"
import iconelivro from "../../assets/Icone_doação.png"
import { useState } from "react"
import axios from "axios"
export default function LivrosDoados(){

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_Url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaimage = (e) => {
        setImage_Url(e.target.value)
    }

    const enviarDados = async() => {
        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://api-livros-xqbv.onrender.com/doar", dadosPEnviar)
        }


    return(
        <section className={s.conteinerTotal}>
            <section className={s.conteinerTitulo}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            </section>
            <section className={s.conteinerFormulario}>
                <section className={s.blocoFormulario}>
                    <section className={s.headerFormulario}>
                    <img src={iconelivro} alt="Icone de um livro azul aberto" />
                    <h2>Informações do Livro</h2>
                    </section>
                <form className={s.conteinerInputs} action="livros-doados" method="post" onSubmit={(e) => e.preventDefault()}>
                <label>
                    <input type="text"  placeholder="Título" required onChange={capturaTitulo}/>
                </label>
                <label>
                    <input type="text"  placeholder="Categoria" required onChange={capturaCategoria}/>
                </label>
                <label>
                    <input type="text"  placeholder="Autor" required onChange={capturaAutor}/>
                </label>
                <label>
                    <input type="url"  placeholder="Link da Imagem" required onChange={capturaimage}/>
                </label>
                <button onClick={enviarDados} type="submit">Doar</button>
                </form>
                </section>
            </section>
        </section>
    )
}