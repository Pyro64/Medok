import style from "./Banner.module.scss"

function Banner(props) {
    const isTitle = props.title;
    if (isTitle) {
        return (
            <div className={style.wrapper}>
                <div className={style.item}>
                    <div className={style.title}>{props.title}</div>
                    <div className={style.text}>{props.text}</div>
                </div>
                <img src={props.img} className={style.img} alt="banner" />
            </div>
        );
    } else {
        return (
            <div className={style.wrapper}>
                <div className={style.item}>
                    <div className={style.text}>{props.text}</div>
                </div>
                <img src={props.img} className={style.img} alt="banner" />
            </div>
        );
    }

}

export default Banner;