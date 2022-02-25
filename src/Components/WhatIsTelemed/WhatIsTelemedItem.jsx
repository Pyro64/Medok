import React from 'react'
import style from './WhatIsTelemed.module.scss';
export default function WhatIsTelemedItem(props) {
    return (
        <div className={style.item}>
            <img className={style.svg} src={props.svg} alt="svg" />
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}
