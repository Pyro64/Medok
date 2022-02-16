import React from 'react';
import style from './Title.module.scss';
const Title = (props) => {
    return (
        <div className={style.container}>
            <div className={style.text}>{props.text}</div>
        </div>
    );
}

export default Title;
