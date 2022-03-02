import React from 'react';
import style from './Input.module.scss'

const Input = ({ input, meta, ...props }) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={style.wrapper}>
            <input {...input} {...props} className={`${style.input}  ${(showError ? style.inputError : '')}`} />
            {showError && <div className={style.error}>{meta.error}</div>}
        </div>
    );
}

export default Input;
