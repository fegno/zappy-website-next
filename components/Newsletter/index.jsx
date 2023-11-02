import React from 'react';
import style from './Newsletter.module.scss';
import NewsLtrForm from '../News-letter-form';

const NewsLetter = () => {
    return (
        <div className={style.news_letter_sec}>
            <NewsLtrForm />
        </div>
    )
}

export default NewsLetter
