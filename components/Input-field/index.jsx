import React from 'react';
import style from './Input-field.module.scss';

const InputField = ({label , ...props}) => {
    return (
        <div className={style.input_field_wrapper}>
            <div className={style.label_field}>
                <label htmlFor={props.name}>
                    {label}
                </label>
            </div>
            <div className={style.input_field}>
                <input {...props} />
            </div> 
        </div>
    )
}

export default InputField;
