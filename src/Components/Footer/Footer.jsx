import s from "./footer.module.scss"
import logofacebook from "../../assets/footer_logos/Logo1Facebook.png"
import logoTwitter from "../../assets/footer_logos/Logo2Twitter.png"
import logoYoutube from "../../assets/footer_logos/Logo3Youtube.png"
import logoLinkedin from "../../assets/footer_logos/Logo4LinkedIn.png"
import logoInstagram from "../../assets/footer_logos/Logo5Instagram.png"

export default function Footer(){
    return(
        <footer className={s.footer}>
            <section className={s.containerFooter}>
                <p>4002-8922</p>
                <nav>
                    <ul className={s.logosFooter}>
                        <li>
                            <a href=""><img src={logofacebook} alt="Logo do facebook." /></a>
                        </li>
                        <li>
                            <a href=""><img src={logoTwitter} alt="Logo do twitter." /></a>
                        </li>
                        <li>
                            <a href=""><img src={logoYoutube} alt="logo do youtube." /></a>
                        </li>
                        <li>
                            <a target="_blank" href=""><img src={logoLinkedin} alt="Logo do linkedIn." /></a>
                        </li>
                        <li>
                            <a href=""><img src={logoInstagram} alt="logo do Instagram." /></a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className={s.copyrightVnW}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}