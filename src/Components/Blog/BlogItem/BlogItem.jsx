import React from 'react';
import style from "./BlogItem.module.scss";

const Blogitem = (props) => {
    return (
        <div className={style.container}>
            <a href="#" className={style.block}>
                <img src={props.img} alt="" className={style.img} />
                <h2>{props.title}</h2>
                <p> {props.text}</p>
            </a>
            <div className={style.item}>
                <img src={props.avatar} alt="" className={style.avatar} />
                <div className={style.wrapper}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.date}>{props.date}</div>
                    <div className={style.read}>{props.read}</div>
                </div>
            </div>
        </div>
    );
}

export default Blogitem;
