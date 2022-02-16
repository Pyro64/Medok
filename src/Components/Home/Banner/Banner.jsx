import style from "./Banner.module.scss"

function Banner() {
    return (
        <div className={style.wrapper}>
            <div className={style.item}>
                <div className={style.title}>Медицина становится проще…</div>
                <div className={style.text}>Все те же врачи, <span>Новый уровень сервиса</span></div>
            </div>
        </div>

    );
}

export default Banner;