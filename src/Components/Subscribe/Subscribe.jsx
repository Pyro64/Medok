import React from "react";
import style from "./Subscribe.module.scss";

function Subscribe(props) {

    let neWtextareaElement = React.createRef();

    let addEmail = (e) => {
        e.preventDefault()
        let emailValue = neWtextareaElement.current.value
        props.addEmail(emailValue)
    }
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.title}>Я не против получать Email рассылку</div>
                <div className={style.subtitle}>И узнавать первым о новых специалистах,
                    о наших акциях и нововведениях</div>
            </div>
            <form className={style.form}>
                <input type="email" placeholder="Введите email" ref={neWtextareaElement} />
                <button className="btn" type="submit" onClick={addEmail}>Подписаться</button>
            </form>
        </div>
    );
}

export default Subscribe;