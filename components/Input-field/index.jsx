import React from 'react';
import style from './Input-field.module.scss';

const InputField = ({ width , ...props}) => {
    return (
        <div className={style.input_field_wrapper}>
            <div className={style.input_field}>
                <input {...props} />
            </div> 
        </div>
    )
}

export default InputField;
