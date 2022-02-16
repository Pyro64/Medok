import style from "./Social.module.scss";
import telegram from "../../../images/Social/telegram.svg"
import viber from "../../../images/Social/viber.svg"
import watsapp from "../../../images/Social/watsapp.svg"
function Social(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.title}>2018-2019 © ООО «МедОК»</div>
                <div className={style.block}>
                    <a href="#" className={style.link}>
                        <img alt="img" src={telegram} />
                    </a>
                    <a href="#" className={style.link}>
                        <img alt="img" src={viber} />
                    </a>
                    <a href="#" className={style.link}>
                        <img alt="img" src={watsapp} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Social;