import style from "./Form.module.scss";

function Form(props) {

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h2 className="title">Если Есть Вопросы</h2>
                <form className={style.form}>
                    <input placeholder="Напишите Ваше имя" />
                    <input type="email" placeholder="Напишите Ваш E-mail или номер телефона" />
                    <textarea placeholder="Напишите Ваш вопрос" ></textarea>
                    <button className="btn">Отправить вопрос</button>
                </form>
            </div>
        </div>
    )
}

export default Form;