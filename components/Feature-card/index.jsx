import React from 'react';
import style from './Feature-card.module.scss';

const FeatureCard = ({data}) => {
    return (
        <div className={style.card_container}>
            <div className={style.card_icon}>
                <img src={data.icon} />
            </div>
            <div className={style.card_title}>
                {data.title}
            </div>
        </div>
    )
}

export default FeatureCard;
