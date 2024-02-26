import React from 'react';
import style from './Contact-card.module.scss';
import Link from 'next/link';

const ContactCard = ({data}) => {
    return (
        <div className={style.contact_card}>
            <div className={style.contact_sec}>
                {data?.title}
            </div>  
            <div className={style.contact_first}>
                <div className={style.contact_icon}>
                    {data?.icon}
                </div>
                {data?.link ? (
                    <Link href={data.link}>
                        <div className={style.contact_text} dangerouslySetInnerHTML={{__html:data?.text}}></div>
                    </Link>
                ) : (
                <span className={style.contact_text} dangerouslySetInnerHTML={{__html:data?.text}}></span>
                )}
            </div>
        </div>
    )
}

export default ContactCard;
