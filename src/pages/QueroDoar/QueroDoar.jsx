import s from "./querodoar.module.scss"
import iconelivro from "../../assets/Icone_doação.png"
export default function LivrosDoados(){
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
                <form className={s.conteinerInputs} action="livros-doados" method="post">
                <label>
                    <input type="text" name="" id="" placeholder="Título" required/>
                </label>
                <label>
                    <input type="text" name="" id="" placeholder="Categoria" required/>
                </label>
                <label>
                    <input type="text" name="" id="" placeholder="Autor" required/>
                </label>
                <label>
                    <input type="url" name="" id="" placeholder="Link da Imagem" required/>
                </label>
                <button type="submit">Doar</button>
                </form>
                </section>
            </section>
        </section>
    )
}