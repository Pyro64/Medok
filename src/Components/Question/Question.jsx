import { Field, reduxForm } from "redux-form";
import style from "./Question.module.scss";
import { email, maxLenghtCreator, required } from "../Utils/validators";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
function Question(props) {
    const onSubmit = (formData) => {
    }
    const maxLenghtTextarea = maxLenghtCreator(100);
    const maxLenghtName = maxLenghtCreator(20);
    const QuestionForm = (props) => {
        return (
            <form className={style.form} onSubmit={props.handleSubmit}>
                <Field component={Input} name='name' placeholder="Напишите Ваше имя" validate={[required, maxLenghtName]} />
                <Field component={Input} name='email' placeholder="Напишите Ваш E-mail" validate={[required, email]} />
                <Field component={Textarea} name='textarea' placeholder="Напишите Ваш вопрос" validate={[required, maxLenghtTextarea]} />
                <button className="btn">Отправить вопрос</button>
            </form>
        )
    }
    const QuestionReduxForm = reduxForm({ form: 'questions' })(QuestionForm)

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h2 className="title">Если Есть Вопросы</h2>
                <QuestionReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Question;