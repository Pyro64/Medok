import style from "./Banner.module.scss"

function Banner(props) {
    const isText = props.text;
    if (isText) {
        return (
            <div className={style.wrapper}>
                <img src={props.img} className={style.img} alt="banner" />
                <div className={style.container}>
                    <div className={style.title}>{props.title}</div>
                    <div className={style.description}>{props.description}</div>
                    <div className={style.text}>{props.text}</div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={style.wrapper}>
                <img src={props.img} className={style.img} alt="banner" />
                <div className={style.container}>
                    <div className={style.title}>{props.title}</div>
                    <div className={style.description}>{props.description}</div>
                </div>
            </div>
        );
    }

}

export default Banner;