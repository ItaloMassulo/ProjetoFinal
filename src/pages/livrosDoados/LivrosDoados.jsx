import s from "./livrosdoados.module.scss"
// import livro1 from "../../assets/livro_protagonista.png"
import { useState, useEffect } from "react"
import axios from "axios"

export default function LivrosDoados(){

    const [livros, setLivros] = useState([])

    const puxarLivros = async () => {
        const resposta = await axios.get("https://api-livros-xqbv.onrender.com/livros")
        console.log(resposta.data)
        setLivros(resposta.data);
    } 

    useEffect(() => {
        puxarLivros()
    },[])

    return(
        <section className={s.conteinerDoados}>
        <h2>Livros Doados</h2>
            <section className={s.conteinerCards}>
            {livros.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <section>
                    <div>
                        <h3>{item.titulo}</h3>
                        <img src={item.image_url} alt={item.titulo} />
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </div>
                </section>
            ))}
            </section>
        </section>
    )
}