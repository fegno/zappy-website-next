import React from 'react';
import style from './Register-card.module.scss';
import Link from 'next/link';

const RegisterCard = ({title , description , link , image}) => {
    return (
        <div className={style.card_container}>
            <div className="row">
                <div className={`col-lg-7 col-sm-6 ${style.card_wrapper}`}>
                    <div className={style.card_heading}>
                        {title}
                    </div>
                    <div className={style.card_des}>
                        {description}
                    </div>
                    <div className={style.register_btn}>
                        <Link href={link}>Register</Link>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-6">
                    <div className={style.card_img}>
                        <img src={image} alt={title}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterCard;
