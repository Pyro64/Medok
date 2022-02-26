import React from 'react';
import style from "./BlogItem.module.scss";

const Blogitem = (props) => {
    return (
        <div className={style.container}>
            <div className={style.block}>
                <a href="#" className={style.link}>
                    <img src={props.img} alt="" className={style.img} />
                </a>
                <h2>{props.title}</h2>
                <p> {props.text}</p>
            </div>
            <div className={style.item}>
                <div className={style.profile}>
                    <img src={props.avatar} alt="" className={style.avatar} />
                    <a href="#" className={style.name}>{props.name}</a>
                </div>
                <div className={style.wrapper}>
                    <div className={style.time}>{props.time}</div>
                    <div className={style.read}>{props.id}</div>
                </div>
            </div>
        </div>
    );
}

export default Blogitem;
