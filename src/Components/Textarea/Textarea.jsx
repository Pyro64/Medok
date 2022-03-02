import React from 'react';
import style from './Textarea.module.scss'

const Textarea = ({ input, meta, ...props }) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={style.wrapper}>
            <textarea {...input} {...props} className={`${style.textarea}   ${(showError ? style.textareaError : '')}`} />
            {showError && <div className={style.error}>{meta.error}</div>}
        </div>
    );
}

export default Textarea;