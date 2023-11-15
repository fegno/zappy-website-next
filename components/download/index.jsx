import React from 'react';
import img from '../../assets/app-store.png';
import style from './Download.module.scss';
import Link from 'next/link';
import play_store from '../../assets/play-store.png';

const Download = () => {
    const App = [
        {image : play_store.src , link:"https://play.google.com/store/games?device=windows" },
        {image : img.src , link:"https://www.apple.com/in/app-store/" }
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
