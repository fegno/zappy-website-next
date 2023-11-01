import React from 'react';
import style from './Features.module.scss';
import store from '../../assets/store.png';
import FeatureCard from '../Feature-card';
import Container from '../Container';

const Features = ( ) => {
    const FeatureData = [
        { icon:store.src , title:"Trusted by customers and sellers"},
        { icon:store.src , title:"Thousands of stores"},
        { icon:store.src , title:"Excellent shopping experience"},
        { icon:store.src , title:"Easy checkout and payment system"}
    ];

    return (
        // <Container>
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
        // </Container>
    )
}

export default Features;
