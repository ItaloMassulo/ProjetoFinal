import s from "./querodoar.module.scss"
import livro1 from "../../assets/livro_protagonista.png"
export default function queroDoar(){
    return(
        <section className={s.conteinerDoados}>
            <section className={s.conteinerTitulo}>
                <h2>Livros Doados</h2>
            </section>
            <section className={s.conteinerCards}>
                <img src={livro1} alt="Imagem de um livro de capa vermelha com o título 'PROTAGONISTA'" />
                <p>O Protagonista</p>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
            </section>
        </section>
    )
}