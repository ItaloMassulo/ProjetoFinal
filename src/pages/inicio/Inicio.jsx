import s from "./inicio.module.scss"
import icone1 from "../../assets/inicio_icone_cards/icone1.png"
import icone2 from "../../assets/inicio_icone_cards/icone2.png"
import icone3 from "../../assets/inicio_icone_cards/icone3.png"
import icone4 from "../../assets/inicio_icone_cards/icone4.png"

export default function Inicio(){
    return(
        <main>
            <section className={s.conteinerChamada}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <h3 className={s.tituloCards}>Por que devo doar?</h3>
            <section className={s.conteinerAvisos}>
                <article className={s.cards}>
                    <img className={s.logocard} src={icone1} alt="Ícone de um circulo social envolvendo pessoas" />
                    <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </article>
                <article className={s.cards}>
                    <img className={s.logocard} src={icone2} alt="Ícone de um boneco lendo um lívro." />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </article>
                <article className={s.cards}>
                <img className={s.logocard} src={icone3} alt="Ícone de um grupo de bonecos com pensamentos iguais." />
                <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </article >
                <article className={s.cards}>
                <img className={s.logocard} src={icone4} alt="Ícone da balança da justiça." />
                <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </article>
            </section>
        </main>
    )
}