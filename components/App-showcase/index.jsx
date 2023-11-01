import React from 'react';
import style from './App-showcase.module.scss';
import Container from '../Container';
import phone from '../../assets/phone.png';
import Download from '../download';

const Showcase = () => {
    return (
            <div className={style.showcase_section}>
                <div className="row">
                    <div className="col-sm-7">
                        <div className={style.showcase_img}>
                            <img src={phone.src} alt="img" />
                        </div>
                    </div>
                    <div className={`col-sm-5 ${style.showcase_details}`}>
                        <div className={style.showcase_name}>
                            Dowload app and enjoy more!
                        </div>
                        <div className={style.showcase_dec}>
                            Download app from
                        </div>
                        <div className={style.download_sec}>
                            <Download />
                        </div>
                    </div>
                </div>       
            </div>
    )
}

export default Showcase;
