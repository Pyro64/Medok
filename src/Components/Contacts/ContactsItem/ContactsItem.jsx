import React from 'react'
import style from './ContactsItem.module.scss'
export default function ContactsItem(props) {
    if (props.isLink) {
        return (
            <div className={style.container}>
                <img className={style.svg} src={props.svg} alt="svg" />
                <a href={props.firstText}>{props.firstText}</a>
                <a href={props.secondText}>{props.secondText}</a>
            </div>
        )
    } else {
        return (
            <div className={style.container}>
                <img className={style.svg} src={props.svg} alt="svg" />
                <p>{props.firstText}</p>
                <p>{props.secondText}</p>
            </div>
        )
    }

}

