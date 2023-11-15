import React from 'react';
import style from './Features.module.scss';
import store from '../../assets/store.png';
import FeatureCard from '../Feature-card';
import trust from '../../assets/trusts.png';
import pay from '../../assets/pay.png';
import purchase from '../../assets/purchase.png';

const Features = ( ) => {
    const FeatureData = [
        { icon:trust.src , title:"Trusted by customers and sellers"},
        { icon:store.src , title:"Thousands of stores"},
        { icon:purchase.src , title:"Excellent shopping experience"},
        { icon:pay.src , title:"Easy checkout and payment system"}
    ];

    return (
        <div className={style.features_container}>
            <div className='row'>
                {FeatureData.map(( fetures , index ) => {
                    return(
                        <div className={`col-md-3 col-6 ${style.featues_card}`} key={index}>
                            <FeatureCard data={fetures} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Features;
