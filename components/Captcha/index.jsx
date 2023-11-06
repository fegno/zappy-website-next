import React, { useState, useEffect } from 'react';
import style from './Captcha.module.scss';

const Captcha = () => {
    const [captcha, setCaptcha] = useState('');
    const [userInput, setUserInput] = useState('');
    
    useEffect(() => {
        fetch('/api/captcha') 
        .then((response) => response.json())
        .then((data) => setCaptcha(data.code));
    }, []);

    const handleCaptchaInputChange = (e) => {
        setUserInput(e.target.value);
    };
    
    return (
        <div className={style.captcha_wrapper}>
            <input
                type="text"
                value={userInput}
                onChange={handleCaptchaInputChange}
                placeholder='Enter captcha value'
            />
            <div className={style.captcha_container}>
                {captcha}
            </div> 
        </div>
    );
};

export default Captcha;
