import React from "react";
import style from "./Subscribe.module.scss";
import SubscribeItem from "./SubscribeItem";

function Subscribe(props) {
    let SendMailClick = (e) => {
        e.preventDefault();
        props.sendMail();
    }

    let newMailChange = (e) => {
        let emailValue = e.target.value;
        props.updateNewMail(emailValue);
    }
    // let state = props.subscribe;
    // let mailElements = state.subscribeData.map(body =>
    //     <SubscribeItem
    //         id={body.id}
    //         body={body.mail}
    //         key={body.id}
    //     />
    // )
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.title}>Я не против получать Email рассылку</div>
                <div className={style.subtitle}>И узнавать первым о новых специалистах,
                    о наших акциях и нововведениях</div>
            </div>
            <form className={style.form}>
                <input type="email" placeholder={props.placeholder} value={props.newSubscribeMail} onChange={newMailChange} />
                <button className="btn" type="submit" onClick={SendMailClick}>Подписаться</button>
            </form>
            {/* {mailElements} */}
        </div>
    );
}

export default Subscribe;