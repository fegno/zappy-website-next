import React from 'react';
import style from './Grocery-card.module.scss';

const GroceryCard = ({data}) => {
    return (
            <div className={style.card_container}>
                <div className={style.card_data}>
                    <div className={style.card_name}>
                        {data.title}
                    </div>
                    <div className={style.card_des}>
                        {data.dec}
                    </div>
                </div>
            </div>
    )
}

export default GroceryCard;
