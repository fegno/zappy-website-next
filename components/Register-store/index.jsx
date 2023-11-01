import React from 'react';
import style from './Register-store.module.scss';
import Container from '../Container';
import seller from '../../assets/seller.png';
import RegisterCard from '../Register-card';

const RegiterStore = () => {
    const STORE = [
        {
            title:"Become a Sellor" ,
            des:"Register as a seller and open shop for start your business" , 
            link:"/",
            image:seller.src
        }
    ]
    return (
        // <Container>
        <div className={style.store_section_container}>
            {STORE.map((item , index) => {
                return(
                    <div className={style.store_container} key={index}>
                        <RegisterCard data={item} />
                    </div>
                )
            })}
        </div>
        // </Container>
    )
}

export default RegiterStore;
