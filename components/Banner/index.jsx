import React from 'react';
import style from './Banner.module.scss';
import banner from '../../assets/Banner.png';

const Banner = () => {
    return (
        <div className={style.banner_wrapper}>
            <img src={banner.src}  alt="banner" />
        </div>
    )
}

export default Banner;
