import React from 'react';
import img from '../../assets/app-store.png';
import style from './Download.module.scss';
import Link from 'next/link';
import play_store from '../../assets/play-store.png';

const Download = () => {
    const App = [
        {image : play_store.src , link:"https://play.google.com/store/apps/details?id=com.fegno.zappiens_customer_app&pli=1" },
        {image : img.src , link:"https://apps.apple.com/in/app/zappy-shop-your-daily-needs/id6471227973" }
    ];

    return (
        <div className={style.app_store_wrapper}>
            {App.map((data) => {
                return(
                   <Link href={data.link}>
                        <img src={data.image} />
                   </Link>
                )
            })}
        </div>
    )
}

export default Download;
