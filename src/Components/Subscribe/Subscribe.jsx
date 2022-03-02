import React from "react";
import { Field, reduxForm } from "redux-form";
import { email, required } from "../Utils/validators";
import style from "./Subscribe.module.scss";
import Input from "../Input/Input";

function Subscribe(props) {
    const SubscribeForm = (props) => {
        return (
            <form className={style.form} onSubmit={props.handleSubmit}>
                <Field component={Input} className={style.input} name='email' placeholder={props.placeholder} validate={[required, email]} />
                <button className="btn">Подписаться</button>
            </form>
        )
    }
    const SubscribeReduxForm = reduxForm({ form: 'subscribe' })(SubscribeForm);
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={style.container}>
            <div className={style.block}>
                <div className={style.wrapper}>
                    <div className={style.title}>Я не против получать Email рассылку</div>
                    <div className={style.subtitle}>И узнавать первым о новых специалистах,
                        о наших акциях и нововведениях</div>
                </div>
                <SubscribeReduxForm onSubmit={onSubmit} />
            </div>
        </div>

    );
}

export default Subscribe;