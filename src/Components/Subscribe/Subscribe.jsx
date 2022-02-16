import style from "./Subscribe.module.scss";

function Subscribe(props) {

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.title}>Я не против получать Email рассылку</div>
                <div className={style.subtitle}>И узнавать первым о новых специалистах,
                    о наших акциях и нововведениях</div>
            </div>
            <form className={style.form}>
                <input type="email" />
                <button className="btn" type="submit">Подписаться</button>
            </form>
        </div>
    );
}

export default Subscribe;