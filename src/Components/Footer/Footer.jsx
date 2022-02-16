import style from "./Footer.module.scss";
import FooterLink from "./FooterLink/FooterLink";
import Social from "./Social/Social";

function Footer(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.block}>
                    <div className={style.item}>
                        <div className={style.title}>Ссылки</div>
                        <FooterLink href="/project" name="О проекте" />
                        <FooterLink href="#" name="Скачать приложение" />
                        <FooterLink href="#" name="Наши врачи" />
                    </div>
                    <div className={style.item}>
                        <div className={style.title}>Как Использовать?</div>
                        <FooterLink href="#" name="Проблемы" />
                        <FooterLink href="#" name="Второе мнение" />
                        <FooterLink href="#" name="Дистанционное наблюдение" />
                        <FooterLink href="#" name="Второе мнение" />
                        <FooterLink href="#" name="Другие вопросы" />
                    </div>
                    <div className={style.item}>
                        <div className={style.title}>Поддержка</div>
                        <FooterLink href="#" name="Связаться с нами" />
                        <FooterLink href="#" name="Клиникам" />
                        <FooterLink href="#" name="Врачам" />
                        <FooterLink href="#" name="Страховым компаниям" />
                    </div>
                    <div className={style.item}>
                        <div className={style.title}>Контакты</div>
                        <FooterLink href="#" name="8 800 350 6175" />
                        <FooterLink href="#" name="info@mismedok.ru" />
                    </div>
                </div>
            </div>
            <Social />
        </div>
    );
}

export default Footer;